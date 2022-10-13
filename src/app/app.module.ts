import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RoutingComponent } from './components/routing/routing.component';
import { StudentsComponent } from './components/students/students.component';
import { ErrorComponent } from './components/routing/error/error.component';
import { HeaderComponent } from './components/routing/header/header.component';
import { HomeComponent } from './components/routing/home/home.component';
import { ProfileComponent } from './components/routing/profile/profile.component';
import { UserDetailsComponent } from './components/routing/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    RegistrationComponent,
    RoutingComponent,
    StudentsComponent,
    ErrorComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
