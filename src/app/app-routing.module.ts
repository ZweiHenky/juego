import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './views/register/register.component';
import { ScoreComponent } from './views/score/score.component';

const routes: Routes = [
  {path:'', redirectTo:'index', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'index', component:IndexComponent},
  {path:'menu', component:MenuComponent},
  {path:'profile', component:ProfileComponent},
  {path:'register', component:RegisterComponent},
  {path:'score', component:ScoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndexComponent, LoginComponent, MenuComponent, ProfileComponent, RegisterComponent]
