import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { PlayersComponent } from './players.component';
import { DashboardComponent } from './dashboard.component';
import {CourseDetailComponent } from './course-detail.component'

const appRoutes : Routes = [
	{
	  path: '',
	  redirectTo: '/dashboard',
	  pathMatch: 'full'
	},
	{
		path: 'courses',
		component: CoursesComponent

	},
	{
		path: 'players',
		component: PlayersComponent
	},
	{
	  path: 'detail/:id',
	  component: CourseDetailComponent
	},
	{
	  path: 'dashboard',
	  component: DashboardComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);