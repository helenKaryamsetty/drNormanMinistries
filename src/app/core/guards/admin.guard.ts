import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

export const adminGuard: CanActivateFn = async () => {
  const router = inject(Router);

  // No session exists on the server; redirect so prerender doesn't hang on network calls.
  if (isPlatformServer(inject(PLATFORM_ID))) {
    return router.createUrlTree(['/admin/login']);
  }

  const supabase = inject(SupabaseService);

  const { data: { user }, error } =
    await supabase.client.auth.getUser();

  if (error || !user) {
    return router.createUrlTree(['/admin/login']);
  }

  const { data: isAdmin, error: roleError } =
    await supabase.client.rpc('is_admin');

  if (roleError || isAdmin !== true) {
    await supabase.client.auth.signOut();
    return router.createUrlTree(['/admin/login']);
  }

  return true;
};
