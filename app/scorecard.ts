import { Course } from './course';
import Player from './player';

export class scorecard {
	id : number;
	course : Course;
  	players : Player[];
  	holesToPlay : [number];
  	holes : [{
  		 number : number; 
  		 scores : [ { player: Player; score: number} ]
  	}]
}