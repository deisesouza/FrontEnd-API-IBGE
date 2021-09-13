import { EstadosRoutingModule } from './estados.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados.component';


@NgModule({
  declarations: [
    EstadosComponent
  ],
  imports: [
    CommonModule,
    EstadosRoutingModule

  ]
})
export class EstadosModule { }
