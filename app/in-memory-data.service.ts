import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let courses = [

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
    },
    {
    'number': 3,
    'name' : 'Hole 3',  
    'par' : 3,
    'distance' : 225,
    'hazzards' : 'none'
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
    return {courses};
  }
}