import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)},
  { path: 'estados', loadChildren: () => import('./estados/estados.module').then(mod => mod.EstadosModule)},
  { path: '', pathMatch: 'full', redirectTo: '/home' }
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
