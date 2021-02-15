import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailChantierComponent } from './detail-chantier/detail-chantier.component';
import { ListChantiersComponent } from './list-chantiers/list-chantiers.component';



@NgModule({
  declarations: [DetailChantierComponent, ListChantiersComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DetailChantierComponent,
    ListChantiersComponent
  ]
})
export class AffichageModule { }
