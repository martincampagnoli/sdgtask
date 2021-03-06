import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElevatorsComponent }      from './elevators/elevators.component';
import { LoginComponent }      from './login/login.component';
import { AuthGuard } from './guard';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'elevators', component: ElevatorsComponent, canActivate: [AuthGuard] }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
