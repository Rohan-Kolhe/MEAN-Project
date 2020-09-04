import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ProfileComponent } from './profile/profile.component';
import { CompleteprofileComponent } from './completeprofile/completeprofile.component';


const routes: Routes = [
  { path: 'completeprofile', component: CompleteprofileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'userpage', component: UserpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
