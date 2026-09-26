import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about-page.component';
import { EventsPageComponent } from './pages/events/events-page.component';
import { GivingPageComponent } from './pages/giving/giving-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { MinistriesPageComponent } from './pages/ministries/ministries-page.component';
import { ResourcesPageComponent } from './pages/resources/resources-page.component';
import { StorePageComponent } from './pages/store/store-page.component';

export const routes: Routes = [
	{ path: '', component: HomePageComponent, title: 'Home | Norman Thomas Ministries' },
	{ path: 'ministries', component: MinistriesPageComponent, title: 'Ministries | Norman Thomas Ministries' },
	{ path: 'events', component: EventsPageComponent, title: 'Events | Norman Thomas Ministries' },
	{ path: 'about', component: AboutPageComponent, title: 'About | Norman Thomas Ministries' },
	{ path: 'giving', component: GivingPageComponent, title: 'Giving | Norman Thomas Ministries' },
	{ path: 'store', component: StorePageComponent, title: 'Store | Norman Thomas Ministries' },
	{ path: 'resources', component: ResourcesPageComponent, title: 'Resources | Norman Thomas Ministries' },
	{ path: '**', redirectTo: '' }
];
