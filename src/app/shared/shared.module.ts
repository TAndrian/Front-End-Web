import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppBarComponent} from './app-bar/app-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import {FiltreNomPrenomPipe} from './filtre-nom-prenom.pipe';
import { RoutingBarComponent } from './routing-bar/routing-bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [AppBarComponent, FiltreNomPrenomPipe, RoutingBarComponent],
    exports: [
        AppBarComponent,
        FiltreNomPrenomPipe,
        RoutingBarComponent
    ],
    imports: [
        CommonModule,
        SharedMaterialModule,
        MatToolbarModule,
        RouterModule
    ],
})
export class SharedModule {
}
