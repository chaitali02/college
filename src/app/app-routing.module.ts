import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
//  }

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);