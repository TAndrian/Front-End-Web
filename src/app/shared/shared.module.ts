import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import { FiltreNomPrenomPipe } from './filtre-nom-prenom.pipe';


@NgModule({
  declarations: [AppBarComponent, FiltreNomPrenomPipe],
    exports: [
        AppBarComponent,
        FiltreNomPrenomPipe,
    ],
  imports: [
      CommonModule,
      SharedMaterialModule,
      MatToolbarModule,
  ],
})
export class SharedModule { }
