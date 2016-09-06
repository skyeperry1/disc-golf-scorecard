import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>DG Score Card</h1><a routerLink="/courses">Courses</a><a routerLink="/players">Players</a>
    <router-outlet></router-outlet>
 	`
})
export class AppComponent { }
