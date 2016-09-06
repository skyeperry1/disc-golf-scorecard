import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import Player from './player';
import { PlayersService } from './players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  template: `<h3>Top Courses</h3>
			<div class="grid grid-pad">
			  <div *ngFor="let course of courses" (click)="gotoDetail(course)" class="col-1-4">
			    <div class="module course">
			      <h4>{{course.name}}</h4>
			    </div>
			  </div>
			</div>`
})
export class DashboardComponent implements OnInit {

	courses : Course[];
	players : Player[];

	constructor( 
		private router: Router,
		private CourseService: CourseService,
		private playersService: PlayersService 
	){}

	getCourses(): Promise<Course[]> {
		return this.CourseService.getCourses()
	}

	getPlayers(): Promise<Player[]> {
		return this.playersService.getPlayers()
			//.then(players => {
				//this.players = players	
				//return this.players;
			//}
			//);
	}

	ngOnInit(){
		let myPromises : [ Promise<Course[]>, Promise<Player[]>] = [this.getCourses(), this.getPlayers() ];
		Promise.all( myPromises )
		.then(( results:any[] ) => {
			this.players = results[0];
			this.courses = results[1];
		});
	}

	gotoDetail(course: Course): void {
	  let link = ['/detail', course.id];
	  this.router.navigate(link);
	}
		
}