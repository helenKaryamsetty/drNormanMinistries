import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should close the mobile navigation on request', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const header = fixture.debugElement.query(By.directive(HeaderComponent)).componentInstance as HeaderComponent;
    header.mobileMenuOpen = true;
    header.closeMobileMenu();
    expect(header.mobileMenuOpen).toBeFalse();
  });

  it('should render ministry navigation and the home hero', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await TestBed.inject(Router).navigateByUrl('/');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.nav-desktop a').length).toBeGreaterThan(0);
    expect(compiled.querySelector('h1')?.textContent).toContain('Kingdom');
  });
});
