import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';
//Rxs operators import
import 'rxjs/Rx';

//This will fake the API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeApiService } from './fake-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroSearchComponent } from './hero-search.component';

import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(FakeApiService),
    MaterializeModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
