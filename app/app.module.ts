import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { PlayersService } from './players.service'
import { CourseService } from './course.service'

import { AppComponent }  from './app.component';
import {CourseDetailComponent } from './course-detail.component'

import { PlayersComponent } from './players.component'
import { CoursesComponent } from './courses.component'
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [ BrowserModule, routing, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent, PlayersComponent, CoursesComponent, DashboardComponent, CourseDetailComponent ],
  providers: [ PlayersService, CourseService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
