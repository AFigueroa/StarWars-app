import { Component } from '@angular/core';
import { Person } from './person.model';
import { People } from './people.model';
import { PeopleService } from './people.service';

// Define Root Component
@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css'],
    providers: [PeopleService]
})

// Bootsrap Root Component
export class PeopleComponent {
    title = 'People';
    errorMessage: string;
    people: People[];
    mode = 'Observable';
    
    constructor (private peopleService: PeopleService) {}
    
    ngOnInit() { this.getPeople(); }
    logPeople(){console.log(this.people)}
    getPeople() {
        console.log('Getting people...');
    this.peopleService.getPeople()
                   .subscribe(
                     people => this.people = people,
                     error =>  this.errorMessage = <any>error);
  }
}