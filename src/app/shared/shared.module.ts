import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';
import {AppMaterialModule} from '../app-material/app-material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AppBarComponent],
  exports: [
      AppBarComponent,
  ],
  imports: [
      CommonModule,
      MatIconModule,
      MatToolbarModule,
      MatButtonModule,
  ],
})
export class SharedModule { }
