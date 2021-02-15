import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailChantierComponent } from './detail-chantier/detail-chantier.component';



@NgModule({
  declarations: [DetailChantierComponent],
  imports: [
    CommonModule
  ],
  exports: [
      DetailChantierComponent
  ]
})
export class AffichageModule { }
