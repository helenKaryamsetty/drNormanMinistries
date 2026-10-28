import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../core/services/supabase.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private supabase = inject(SupabaseService);
  private router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  isLoading = false;
  errorMessage = '';
  successMessage = '';
  isConfigured = false;
  configErrorMessage = '';

  ngOnInit() {
    this.checkConfiguration();
  }

  checkConfiguration() {
    const url = environment.supabaseUrl;
    const key = environment.supabasePublishableKey;

    const hasInvalidUrl = !url || url.includes('YOUR_');
    const hasInvalidKey = !key || key.includes('YOUR_');

    if (hasInvalidUrl || hasInvalidKey) {
      this.isConfigured = false;
      this.configErrorMessage = `
⚠️ Supabase Not Configured

To set up the admin portal, you need to:

1. Get your Supabase credentials:
   → Go to https://app.supabase.com/
   → Click Settings → API
   → Copy your Project URL and anon public key

2. Update these files:
   • src/environments/environment.ts
   • src/environments/environment.development.ts

3. Replace the placeholder values:
   • supabaseUrl: 'https://your-project.supabase.co'
   • supabasePublishableKey: 'eyJhbGc...'

4. Restart your development server: npm start

For detailed instructions, see: SETUP_CHECKLIST.md
      `;
    } else {
      this.isConfigured = true;
      this.configErrorMessage = '';
    }
  }

  async onSubmit() {
    // Check configuration first
    if (!this.isConfigured) {
      this.checkConfiguration();
      this.errorMessage = 'Supabase credentials are not configured. See setup instructions above.';
      return;
    }

    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {
      const { email, password } = this.loginForm.value;

      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      const { data, error } = await this.supabase.client.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        throw error;
      }

      if (data?.user) {
        // Verify user is admin
        const { data: isAdmin, error: roleError } = await this.supabase.client.rpc('is_admin');

        if (roleError || isAdmin !== true) {
          await this.supabase.client.auth.signOut();
          this.errorMessage = 'You do not have admin privileges.';
          this.isLoading = false;
          return;
        }

        this.successMessage = 'Login successful! Redirecting...';
        setTimeout(() => {
          this.router.navigate(['/admin']);
        }, 500);
      }
    } catch (error: any) {
      console.error('Login error:', error);
      this.errorMessage = error?.message || 'Login failed. Please try again.';
      
      // Check if it's a configuration error
      if (error?.message?.includes('Invalid') || error?.message?.includes('URL')) {
        this.checkConfiguration();
      }
    } finally {
      this.isLoading = false;
    }
  }
}
