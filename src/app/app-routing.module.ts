import { EditSitterComponent } from './edit-sitter/edit-sitter.component';
import { SitterListComponent } from './sitter-list/sitter-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AComponent } from './home/a/a.component';
import { BComponent } from './home/b/b.component';
import { PortalComponent } from './portal/portal.component';
import { FindASitterComponent } from './portal/find-a-sitter/find-a-sitter.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, children: [
    {path: 'a', component: AComponent},
    {path: 'b', component: BComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'contact', component: ContactComponent}
  ]},
  {path: 'portal', component: PortalComponent, canActivate: [AuthGuard], children: [
    {path: 'find-a-sitter', component: SitterListComponent},
    {path: 'edit-sitter/:id', component: EditSitterComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
