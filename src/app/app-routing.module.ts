import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'security',
    loadChildren: './modules/security/security.module#SecurityModule'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'security'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
