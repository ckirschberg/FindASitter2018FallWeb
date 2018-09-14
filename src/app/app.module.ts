import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AComponent } from './home/a/a.component';
import { BComponent } from './home/b/b.component';
import { PortalComponent } from './portal/portal.component';
import { FindASitterComponent } from './portal/find-a-sitter/find-a-sitter.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    AComponent,
    BComponent,
    PortalComponent,
    FindASitterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // now I can use ReactiveForms.
    BrowserAnimationsModule ,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
