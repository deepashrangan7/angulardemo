import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { HttpClientModule } from '@angular/common/http';
import { Followerservice } from './services/follwers.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers', component: FollowersComponent },
    ])
  ],
  providers: [Followerservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
