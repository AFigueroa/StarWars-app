import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Person } from './person.model';
import { People } from './people.model';

@Injectable()
export class PeopleService {

    private peopleUrl = 'http://swapi.co/api/people/';  // URL to web API

    constructor (private http: Http) {}

    getPeople(): Observable<People[]> {
        return this.http.get(this.peopleUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
    
    getPerson(personId): Observable<Person[]> {
        return this.http.get(this.peopleUrl + personId)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        console.log(body)
        return body || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ?    error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}