export class Course {
	id : number;
	name : string;
	holes : [{
		'number': number,
		'name' : string,  
		'par' : number,
		'distance' : number,
		'hazzards' : string
	}]; 
}