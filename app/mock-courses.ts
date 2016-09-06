import {Course} from './course';

export const COURSES : Course[] =[

{
	id : 1,
	name : 'Pye Brook Park',
	holes : [{
		'number': 1,
		'name' : 'Hole 1',  
		'par' : 3,
		'distance' : 225,
		'hazzards' : 'none'
		},
		{
		'number': 2,
		'name' : 'Hole 2',  
		'par' : 4,
		'distance' : 255,
		'hazzards' : 'Pond'
		}
		]
},

{
	id : 2,
	name : 'Borderlands Park',
	holes : [{
		'number': 1,
		'name' : 'Hole 1',  
		'par' : 3,
		'distance' : 125,
		'hazzards' : 'Trees'
		},
		{
		'number': 2,
		'name' : 'Hole 2',  
		'par' : 4,
		'distance' : 150,
		'hazzards' : 'More Trees'
		}
		]
},

]