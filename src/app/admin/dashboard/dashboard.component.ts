import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../core/services/supabase.service';
import { EventsService, CurrentEvent } from '../../core/services/events.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private supabase = inject(SupabaseService);
  private eventsService = inject(EventsService);
  private router = inject(Router);

  events: CurrentEvent[] = [];
  filteredEvents: CurrentEvent[] = [];
  isLoading = true;
  errorMessage = '';
  successMessage = '';

  // Filter and sort
  statusFilter = 'all'; // all, published, draft
  sortBy = 'date'; // date, title, updated
  searchQuery = '';

  // Dashboard stats
  totalEvents = 0;
  publishedEvents = 0;
  draftEvents = 0;
  upcomingEvents = 0;

  ngOnInit() {
    this.loadEvents();
  }

  async loadEvents() {
    this.isLoading = true;
    this.errorMessage = '';

    try {
      this.events = await this.eventsService.getAllEventsFromSupabase();
      this.calculateStats();
      this.applyFiltersAndSort();
    } catch (error: any) {
      console.error('Error loading events:', error);
      this.errorMessage = 'Failed to load events. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }

  calculateStats() {
    this.totalEvents = this.events.length;
    this.publishedEvents = this.events.filter(e => e.published).length;
    this.draftEvents = this.events.filter(e => !e.published).length;

    const now = new Date();
    this.upcomingEvents = this.events.filter(e => {
      if (e.published && e.date) {
        const eventDate = new Date(e.date);
        return eventDate >= now;
      }
      return false;
    }).length;
  }

  applyFiltersAndSort() {
    let filtered = [...this.events];

    // Apply status filter
    if (this.statusFilter === 'published') {
      filtered = filtered.filter(e => e.published);
    } else if (this.statusFilter === 'draft') {
      filtered = filtered.filter(e => !e.published);
    }

    // Apply search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(e =>
        e.title.toLowerCase().includes(query) ||
        e.description?.toLowerCase().includes(query) ||
        e.location?.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    if (this.sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortBy === 'updated') {
      filtered.sort((a, b) => {
        const dateA = new Date(a.updated_at || a.created_at || 0).getTime();
        const dateB = new Date(b.updated_at || b.created_at || 0).getTime();
        return dateB - dateA; // Most recent first
      });
    } else {
      filtered.sort((a, b) => {
        const dateA = new Date(a.date || 0).getTime();
        const dateB = new Date(b.date || 0).getTime();
        return dateA - dateB; // Earliest first
      });
    }

    this.filteredEvents = filtered;
  }

  onStatusFilterChange() {
    this.applyFiltersAndSort();
  }

  onSortChange() {
    this.applyFiltersAndSort();
  }

  onSearchChange() {
    this.applyFiltersAndSort();
  }

  navigateToNewEvent() {
    this.router.navigate(['/admin/events/new']);
  }

  navigateToEditEvent(eventId: string) {
    this.router.navigate(['/admin/events', eventId, 'edit']);
  }

  async deleteEvent(event: CurrentEvent) {
    if (!confirm(`Are you sure you want to delete "${event.title}"?`)) {
      return;
    }

    try {
      // Delete image if exists
      if (event.image) {
        await this.eventsService.deleteEventImage(event.image);
      }

      // Delete event
      const success = await this.eventsService.deleteEventFromSupabase(event.id);
      if (success) {
        this.successMessage = `Event "${event.title}" deleted successfully.`;
        await this.loadEvents();
        setTimeout(() => this.successMessage = '', 3000);
      } else {
        this.errorMessage = 'Failed to delete event.';
      }
    } catch (error: any) {
      console.error('Error deleting event:', error);
      this.errorMessage = 'Failed to delete event. Please try again.';
    }
  }

  async togglePublish(event: CurrentEvent) {
    try {
      const newStatus = !event.published;
      const updated = await this.eventsService.updateEventInSupabase(event.id, {
        published: newStatus
      });

      if (updated) {
        this.successMessage = `Event "${event.title}" ${newStatus ? 'published' : 'unpublished'} successfully.`;
        await this.loadEvents();
        setTimeout(() => this.successMessage = '', 3000);
      } else {
        this.errorMessage = 'Failed to update event status.';
      }
    } catch (error: any) {
      console.error('Error updating event:', error);
      this.errorMessage = 'Failed to update event. Please try again.';
    }
  }

  async logout() {
    try {
      await this.supabase.client.auth.signOut();
      this.router.navigate(['/admin/login']);
    } catch (error: any) {
      console.error('Error logging out:', error);
      this.errorMessage = 'Failed to logout. Please try again.';
    }
  }

  formatDate(dateString: string | null | undefined): string {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return dateString;
    }
  }
}
