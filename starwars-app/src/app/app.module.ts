import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { RouterModule } from '@angular/router';
import {appRoutes} from './app.routes'

// Components
import { AppComponent } from './app.component';
import {HomeComponent} from './public/home/home.component';
import {PeopleComponent} from './public/people/people.component';
import {PeopleDetailsComponent} from './public/people/details/people.details.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      PeopleComponent,
      PeopleDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
