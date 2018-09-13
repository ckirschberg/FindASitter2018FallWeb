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

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: 'a', component: AComponent},
    {path: 'b', component: BComponent}
  ]},
  {path: 'portal', component: PortalComponent, children: [
    {path: 'find-a-sitter', component: FindASitterComponent, canActivate: [AuthGuard]}
  ]},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
