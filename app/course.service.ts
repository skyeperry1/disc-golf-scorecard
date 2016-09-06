import { Injectable } from '@angular/core';
import { Course } from './course';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

//import { COURSES } from './mock-courses';


@Injectable()

export class CourseService{
	private heroesUrl = 'app/courses';  // URL to web api

	constructor(private http: Http
		) { }


	getCourses(): Promise<Course[]> {
		return this.http.get(this.heroesUrl)
		           .toPromise()
		           .then(response => response.json().data as Course[])
		           .catch(this.handleError);
	}

	/*
	getCourses(): Promise<Course[]>{
		return Promise.resolve(COURSES);
	}
	*/
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

	getCourse(id: number): Promise<Course> {
	  return this.getCourses()
	             .then(courses => courses.find(course => course.id === id));
	}


}
