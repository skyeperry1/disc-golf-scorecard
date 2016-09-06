import {Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { Router } from '@angular/router';

@Component ({
	selector: 'courses',
	template: `<h1>Courses</h1>
		<li *ngFor="let course of courses" (click)="gotoDetail(course)">
			<span>{{course.id}}</span>
			<span>{{course.name}}</span>			
		</li>
	`
})

export class CoursesComponent implements OnInit{

	courses : Course[];

	constructor( 
	private router: Router,
	private CourseService: CourseService ){}

	getCourses(): void {
		this.CourseService.getCourses()
			.then(courses =>
				this.courses = courses	
			);
	}

	ngOnInit(): void {
		this.getCourses();
	}

	gotoDetail(course: Course): void {
	  let link = ['/detail', course.id];
	  this.router.navigate(link);
	}

}