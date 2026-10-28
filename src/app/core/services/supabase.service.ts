
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  createClient,
  SupabaseClient
} from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private _client: SupabaseClient | null = null;
  private credentialsWarningShown = false;

  get client(): SupabaseClient {
    if (!this._client) {
      const url = environment.supabaseUrl;
      const key = environment.supabasePublishableKey;

      // Check if credentials are still placeholder values
      const hasInvalidUrl = !url || url.includes('YOUR_');
      const hasInvalidKey = !key || key.includes('YOUR_');

      if ((hasInvalidUrl || hasInvalidKey) && !this.credentialsWarningShown) {
        this.credentialsWarningShown = true;
        const message = `
⚠️  Supabase credentials not configured!

To use the admin portal, you must:
1. Get your Supabase Project URL and API key from: https://app.supabase.com/
   - Click Settings → API
   - Copy the Project URL (e.g., https://xxxxx.supabase.co)
   - Copy the anon public key

2. Update these files with your credentials:
   - src/environments/environment.ts
   - src/environments/environment.development.ts

3. Replace these placeholders:
   supabaseUrl: 'YOUR_SUPABASE_PROJECT_URL' → 'https://your-project.supabase.co'
   supabasePublishableKey: 'YOUR_SUPABASE_PUBLISHABLE_KEY' → 'eyJhbGc...'

4. Restart your development server: npm start

See SETUP_CHECKLIST.md for detailed instructions.
        `;
        console.error(message);
        alert('❌ Supabase not configured. Check console for instructions.');
      }

      try {
        // Create client with proper auth configuration
        this._client = createClient(
          url || 'https://placeholder.supabase.co',
          key || 'placeholder-key',
          {
            auth: {
              persistSession: this.isBrowser,
              autoRefreshToken: this.isBrowser,
              detectSessionInUrl: this.isBrowser
            }
          }
        );
      } catch (error) {
        console.error('Failed to initialize Supabase client:', error);
        // Return a dummy client to prevent crashes
        throw new Error(
          'Supabase credentials are invalid. Please check your environment configuration.'
        );
      }
    }
    return this._client;
  }
}
