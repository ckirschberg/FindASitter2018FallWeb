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
import { SitterListComponent } from './sitter-list/sitter-list.component';
import {MatCardModule} from '@angular/material/card';
import { EditSitterComponent } from './edit-sitter/edit-sitter.component';
import { SitterComponent } from './sitter/sitter.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { rootReducer } from './store'; // Added this to get the root reducer
import { HttpClientModule } from '@angular/common/http';


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
    RegisterComponent,
    SitterListComponent,
    EditSitterComponent,
    SitterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule, // now I can use ReactiveForms.
    BrowserAnimationsModule ,
    MatInputModule, MatCardModule,
    NgReduxModule,   NgReduxRouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) {
   
      this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);

 
      ngReduxRouter.initialize(/* args */);   
  }
 
 }
