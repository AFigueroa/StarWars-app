import {HomeComponent} from './public/home/home.component';
import {PeopleComponent} from './public/people/people.component';
import {PeopleDetailsComponent} from './public/people/details/people.details.component';

export const appRoutes = [
    {
        // Home Route
        path: '',
        name: 'Home',
        component: HomeComponent
    },
    {
        // People List Route
        path: 'people',
        name: 'People',
        component: PeopleComponent
    },
    {
        // People Details Route
        path: 'people/:id',
        as: 'personId',
        name: 'Details',
        component: PeopleDetailsComponent
    },
    { 
        // Redirect to 404
        path: '**',
        redirectTo: '/'
    },
];