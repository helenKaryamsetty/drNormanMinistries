import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about-page.component';
import { EventsPageComponent } from './pages/events/events-page.component';
import { GivingPageComponent } from './pages/giving/giving-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { MinistriesPageComponent } from './pages/ministries/ministries-page.component';
import { ResourcesPageComponent } from './pages/resources/resources-page.component';
import { StorePageComponent } from './pages/store/store-page.component';
import { NewLifePageComponent } from './pages/new-life/new-life-page.component';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
	{ path: '', component: HomePageComponent, title: 'Home | Norman Thomas Ministries', data: { orgId: 'ntm' } },
	{ path: 'ministries', component: MinistriesPageComponent, title: 'Ministries | Norman Thomas Ministries', data: { orgId: 'ntm' } },
	{ path: 'events', component: EventsPageComponent, title: 'Events | Norman Thomas Ministries', data: { orgId: 'ntm' } },
	{ path: 'about', component: AboutPageComponent, title: 'About | Norman Thomas Ministries', data: { orgId: 'ntm' } },
	{ path: 'giving', component: GivingPageComponent, title: 'Giving | Norman Thomas Ministries', data: { orgId: 'ntm' } },
	{ path: 'store', component: StorePageComponent, title: 'Store | Norman Thomas Ministries', data: { orgId: 'ntm' } },
	{ path: 'resources', component: ResourcesPageComponent, title: 'Resources | Norman Thomas Ministries', data: { orgId: 'ntm' } },
	{
		path: 'new-life',
		component: NewLifePageComponent,
		title: 'New Life Church International | Norman Thomas Ministries',
		data: { orgId: 'nlc' }
	},
	{ path: 'nlc-international', redirectTo: 'new-life', pathMatch: 'full' },
	{
		path: 'admin/login',
		loadComponent: () => import('./admin/login/login.component').then(m => m.LoginComponent)
	},
	{
		path: 'admin',
		canActivate: [adminGuard],
		loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
	},
	{
		path: 'admin/events/new',
		canActivate: [adminGuard],
		loadComponent: () => import('./admin/event-editor/event-editor.component').then(m => m.EventEditorComponent)
	},
	{
		path: 'admin/events/:id/edit',
		canActivate: [adminGuard],
		loadComponent: () => import('./admin/event-editor/event-editor.component').then(m => m.EventEditorComponent)
	},
	{ path: '**', redirectTo: '' }
];
