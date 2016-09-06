import { Component, Input, OnInit } from '@angular/core';
import { Course } from './Course';

import { ActivatedRoute, Params } from '@angular/router';

import { CourseService } from './course.service';

@Component({
  selector: 'my-course-detail',
  template: `
    <div *ngIf="course">
      <h2>{{course.name}} details!</h2>
      <div>
        <label>id: </label>{{course.id}}
      </div>
      <div>
        <label>name: </label>
        <span> {{course.name}} </span>
      </div>
      <div *ngFor="let hole of course.holes">
        <span># {{hole.number}}</span>
        <span>Name : {{hole.name}}</span>
        <span>Par : {{hole.par}}</span>
        <span>Distance : {{hole.distance}}</span>
      </div>
    </div>
    <button (click)="goBack()">Back</button>
  `
})

export class CourseDetailComponent {
  @Input() course:  Course;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.courseService.getCourse(id)
        .then(course => this.course = course);
    });
  }

  goBack(): void {
    window.history.back();
  }




}