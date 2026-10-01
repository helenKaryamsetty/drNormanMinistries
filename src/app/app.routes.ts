import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about-page.component';
import { EventsPageComponent } from './pages/events/events-page.component';
import { GivingPageComponent } from './pages/giving/giving-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { MinistriesPageComponent } from './pages/ministries/ministries-page.component';
import { ResourcesPageComponent } from './pages/resources/resources-page.component';
import { StorePageComponent } from './pages/store/store-page.component';
import { NewLifePageComponent } from './pages/new-life/new-life-page.component';

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
	{ path: '**', redirectTo: '' }
];
