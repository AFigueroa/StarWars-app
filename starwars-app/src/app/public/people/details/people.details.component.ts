import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from './../person.model';
import { PeopleService } from './../people.service';

// Define Root Component
@Component({
  selector: 'app-people-details',
  templateUrl: './people.details.component.html',
  styleUrls: ['./people.details.component.css']
})

// Bootsrap Root Component
export class PeopleDetailsComponent {
    
    // Initiate variables
    title = 'Details';
    id : number;
    private subscription : any;
    errorMessage: string;
    person: Person[];
    mode = 'Observable';

    constructor(
        private route: ActivatedRoute,
        private peopleService: PeopleService
    ){}

    ngOnInit(){
        
        // Extract the Id parameter
        this.subscription = this.route.params.subscribe(
            params => { 
                // Convert and store the Id parameter as a number
                this.id = +params['id'];
            }
        );
        
        // Having the id, make a call to the API to get the character's data
        this.getPerson(this.id);
    }

    getPerson(personId) {
        this.peopleService.getPerson(personId).subscribe(
             person => this.person = person,
             error =>  this.errorMessage = <any>error
        );
    }

    ngOnDestroy() {
        // Close subscription
        this.subscription.unsubscribe();
    }

}