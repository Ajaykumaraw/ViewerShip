import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlHomeComponent } from './fl-home/fl-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { MKTHomeComponent } from './mkt-home/mkt-home.component';
import { PreRegisterComponent } from './pre-register/pre-register.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:FlHomeComponent},
  {path:'marketer',component:MKTHomeComponent},
  {path:"home",component:HomeComponent},
  {path:"preregister",component:PreRegisterComponent},
  {path:"messages",component:MessageComponent},
  {path:"profile",component:ProfileComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
