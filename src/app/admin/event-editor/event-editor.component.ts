import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EventsService, CurrentEvent } from '../../core/services/events.service';

@Component({
  selector: 'app-admin-event-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private eventsService = inject(EventsService);

  eventForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    date: ['', Validators.required],
    time: [''],
    endDate: [''],
    endTime: [''],
    location: [''],
    category: [''],
    image: [''],
    imageAlt: [''],
    ctaText: [''],
    ctaLink: [''],
    published: [false]
  });

  isLoading = false;
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';
  imagePreview: string | null = null;
  selectedFile: File | null = null;
  isEditMode = false;
  eventId: string | null = null;
  originalImageUrl: string | null = null;

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.eventId = params['id'];
        this.loadEvent(params['id']);
      }
    });
  }

  async loadEvent(id: string) {
    this.isLoading = true;
    this.errorMessage = '';

    try {
      const event = await this.eventsService.getEventFromSupabase(id);
      if (event) {
        this.originalImageUrl = event.image || null;
        this.eventForm.patchValue({
          title: event.title,
          description: event.description,
          date: event.date,
          time: event.time || '',
          endDate: event.endDate || '',
          endTime: event.endTime || '',
          location: event.location || '',
          category: event.category || '',
          image: event.image || '',
          imageAlt: event.imageAlt,
          ctaText: event.ctaText || '',
          ctaLink: event.ctaLink || '',
          published: event.published || false
        });

        if (event.image) {
          this.imagePreview = event.image;
        }
      } else {
        this.errorMessage = 'Event not found.';
        setTimeout(() => this.router.navigate(['/admin']), 2000);
      }
    } catch (error: any) {
      console.error('Error loading event:', error);
      this.errorMessage = 'Failed to load event. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        this.errorMessage = 'Please select a valid image file.';
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.errorMessage = 'Image file size must be less than 5MB.';
        return;
      }

      this.selectedFile = file;
      this.errorMessage = '';

      // Create preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.selectedFile = null;
    this.imagePreview = null;
    this.eventForm.patchValue({ image: '' });
  }

  async onSubmit() {
    if (this.eventForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {
      const formValue = this.eventForm.value;
      let imageUrl = formValue.image || this.originalImageUrl;

      // Upload image if a new file was selected
      if (this.selectedFile && this.eventId) {
        imageUrl = await this.eventsService.uploadEventImage(this.selectedFile, this.eventId);
        if (!imageUrl) {
          throw new Error('Failed to upload image');
        }
      } else if (this.selectedFile && !this.eventId) {
        // For new events, we'll use a temporary ID for upload
        const tempId = `event-${Date.now()}`;
        imageUrl = await this.eventsService.uploadEventImage(this.selectedFile, tempId);
        if (!imageUrl) {
          throw new Error('Failed to upload image');
        }
      }

      const eventData: Omit<CurrentEvent, 'id' | 'created_at' | 'updated_at'> = {
        title: formValue.title || '',
        description: formValue.description || null,
        date: formValue.date || null,
        time: formValue.time || null,
        endDate: formValue.endDate || null,
        endTime: formValue.endTime || null,
        location: formValue.location || null,
        category: formValue.category || null,
        image: imageUrl || null,
        imageAlt: formValue.imageAlt || null,
        ctaText: formValue.ctaText || null,
        ctaLink: formValue.ctaLink || null,
        published: formValue.published || false
      };

      if (this.isEditMode && this.eventId) {
        // Update existing event
        const updated = await this.eventsService.updateEventInSupabase(this.eventId, eventData);
        if (updated) {
          this.successMessage = 'Event updated successfully! Redirecting...';
          setTimeout(() => this.router.navigate(['/admin']), 1500);
        } else {
          throw new Error('Failed to update event');
        }
      } else {
        // Create new event
        const created = await this.eventsService.createEventInSupabase(eventData);
        if (created) {
          this.successMessage = 'Event created successfully! Redirecting...';
          setTimeout(() => this.router.navigate(['/admin']), 1500);
        } else {
          throw new Error('Failed to create event');
        }
      }
    } catch (error: any) {
      console.error('Error saving event:', error);
      this.errorMessage = error?.message || 'Failed to save event. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }

  goBack() {
    this.router.navigate(['/admin']);
  }
}
