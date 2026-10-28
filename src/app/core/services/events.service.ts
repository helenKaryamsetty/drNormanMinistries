import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseService } from './supabase.service';

export interface CurrentEvent {
  id: string;
  title: string;
  description: string | null ;
  date: string | null;
  time?: string | null;
  endDate?: string | null;
  endTime?: string | null;
  location?: string | null;
  image: string | null;
  imageAlt: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  category?: string | null;
  published?: boolean;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private supabase = inject(SupabaseService);
  private currentEventsSubject = new BehaviorSubject<CurrentEvent[]>(this.getDefaultEvents());
  currentEvents$: Observable<CurrentEvent[]> = this.currentEventsSubject.asObservable();

  /**
   * Get default/fallback events
   */
  private getDefaultEvents(): CurrentEvent[] {
    return [
      {
        id: '1',
        title: 'Sunday Worship Service',
        description: 'Join us for our main Sunday worship service with spirit-filled worship and practical teaching from the Word.',
        date: 'Every Sunday',
        time: '9:30 AM',
        location: 'New Life Church, Lake Charles, LA',
        image: '/assets/church-speaking.webp',
        imageAlt: 'Sunday Worship Service at New Life Church',
        ctaText: 'Plan Your Visit',
        ctaLink: '#visit'
      },
      {
        id: '2',
        title: 'Kingdom Entrepreneurs Summit',
        description: 'A gathering of faith and marketplace leaders for teaching on kingdom-minded enterprise and business excellence.',
        date: 'Save the Date',
        time: '2026',
        location: 'Lake Charles, Louisiana',
        image: '/assets/teaching-audience.webp',
        imageAlt: 'Kingdom Entrepreneurs Summit',
        ctaText: 'Register on Eventbrite',
        ctaLink: 'https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067'
      },
      {
        id: '3',
        title: 'School of Faith Classes',
        description: 'Bible institute classes for spiritual growth and deeper understanding of God\'s Word. Available on-site, online, and in prisons.',
        date: 'Every Sunday',
        time: '6:30 PM',
        location: 'New Life Church & Online',
        image: '/assets/teaching-audience.webp',
        imageAlt: 'School of Faith Classes',
        ctaText: 'Learn More',
        ctaLink: 'https://schooloffaithusa.org'
      },
      {
        id: '4',
        title: 'Corporate Prayer Meeting',
        description: 'Join the whole church family in seeking God together. A powerful time of intercession and connection.',
        date: 'Every Sunday',
        time: '5:30 PM',
        location: 'New Life Church, Lake Charles, LA',
        image: '/assets/dr-norman-speaking.webp',
        imageAlt: 'Corporate Prayer Meeting',
        ctaText: 'Join Us',
        ctaLink: '#visit'
      },
      {
        id: '5',
        title: 'Youth Life Groups',
        description: 'Discipleship and community for the next generation. Building faith and friendships together.',
        date: 'Every Sunday',
        time: '6:30 PM',
        location: 'New Life Church, Lake Charles, LA',
        image: '/assets/teaching-audience.webp',
        imageAlt: 'Youth Life Groups',
        ctaText: 'Get Involved',
        ctaLink: '#visit'
      }
    ];
  }

  /**
   * Get current events as a promise
   */
  getEvents(): Promise<CurrentEvent[]> {
    return new Promise((resolve) => {
      this.currentEvents$.subscribe((events) => {
        resolve(events);
      });
    });
  }

  /**
   * Replace the current event list, for example after loading it from an API.
   */
  setEvents(events: CurrentEvent[]): void {
    this.currentEventsSubject.next([...events]);
  }

  /**
   * Add a new event (for dynamic updates)
   */
  addEvent(event: CurrentEvent): void {
    const current = this.currentEventsSubject.value;
    this.currentEventsSubject.next([...current, event]);
  }

  /**
   * Remove an event by id
   */
  removeEvent(eventId: string): void {
    const current = this.currentEventsSubject.value;
    this.currentEventsSubject.next(current.filter((e) => e.id !== eventId));
  }

  /**
   * Update an event
   */
  updateEvent(eventId: string, updates: Partial<CurrentEvent>): void {
    const current = this.currentEventsSubject.value;
    this.currentEventsSubject.next(
      current.map((e) => (e.id === eventId ? { ...e, ...updates } : e))
    );
  }

  // ===== Supabase Integration Methods (Admin) =====

  /**
   * Get all events from Supabase (including drafts) - admin only
   */
  async getAllEventsFromSupabase(): Promise<CurrentEvent[]> {
    const { data, error } = await this.supabase.client
      .from('events')
      .select('*')
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching events from Supabase:', error);
      return this.getDefaultEvents();
    }

    return data || [];
  }

  /**
   * Get only published events from Supabase - public
   */
  async getPublishedEventsFromSupabase(): Promise<CurrentEvent[]> {
    const { data, error } = await this.supabase.client
      .from('events')
      .select('*')
      .eq('published', true)
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching published events from Supabase:', error);
      return this.getDefaultEvents();
    }

    return data || [];
  }

  /**
   * Get a single event by ID from Supabase
   */
  async getEventFromSupabase(id: string): Promise<CurrentEvent | null> {
    const { data, error } = await this.supabase.client
      .from('events')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching event from Supabase:', error);
      return null;
    }

    return data;
  }

  /**
   * Create a new event in Supabase
   */
  async createEventInSupabase(event: Omit<CurrentEvent, 'id' | 'created_at' | 'updated_at'>): Promise<CurrentEvent | null> {
    const { data, error } = await this.supabase.client
      .from('events')
      .insert([{ ...event, created_at: new Date().toISOString() }])
      .select()
      .single();

    if (error) {
      console.error('Error creating event in Supabase:', error);
      return null;
    }

    return data;
  }

  /**
   * Update an event in Supabase
   */
  async updateEventInSupabase(id: string, updates: Partial<CurrentEvent>): Promise<CurrentEvent | null> {
    const { data, error } = await this.supabase.client
      .from('events')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating event in Supabase:', error);
      return null;
    }

    return data;
  }

  /**
   * Delete an event from Supabase
   */
  async deleteEventFromSupabase(id: string): Promise<boolean> {
    const { error } = await this.supabase.client
      .from('events')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting event from Supabase:', error);
      return false;
    }

    return true;
  }

  /**
   * Upload an event image to Supabase storage
   */
  async uploadEventImage(file: File, eventId: string): Promise<string | null> {
    const fileName = `${eventId}/${file.name}`;

    const { data, error } = await this.supabase.client.storage
      .from('event-images')
      .upload(fileName, file, { upsert: true });

    if (error) {
      console.error('Error uploading event image:', error);
      return null;
    }

    // Return the public URL of the uploaded file
    const { data: publicData } = this.supabase.client.storage
      .from('event-images')
      .getPublicUrl(fileName);

    return publicData?.publicUrl || null;
  }

  /**
   * Delete an event image from Supabase storage
   */
  async deleteEventImage(imagePath: string): Promise<boolean> {
    if (!imagePath) return true;

    // Extract the path from the full URL if needed
    const path = imagePath.includes('/storage/v1/object/public/') 
      ? imagePath.split('/event-images/')[1] 
      : imagePath;

    if (!path) return true;

    const { error } = await this.supabase.client.storage
      .from('event-images')
      .remove([path]);

    if (error) {
      console.error('Error deleting event image:', error);
      return false;
    }

    return true;
  }
}
