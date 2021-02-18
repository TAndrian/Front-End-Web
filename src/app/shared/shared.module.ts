import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppBarComponent} from './app-bar/app-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import {FiltreNomPrenomPipe} from './filtre-nom-prenom.pipe';
import { RoutingBarComponent } from './routing-bar/routing-bar.component';
import { RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import {NgxMatFileInputModule} from '@angular-material-components/file-input';

@NgModule({
    declarations: [AppBarComponent, FiltreNomPrenomPipe, RoutingBarComponent, ImageUploadComponent, ImageDisplayComponent],
    exports: [
        AppBarComponent,
        FiltreNomPrenomPipe,
        RoutingBarComponent,
        ImageUploadComponent,
        ImageDisplayComponent
    ],
    imports: [
        CommonModule,
        SharedMaterialModule,
        MatToolbarModule,
        RouterModule,
        NgxMatFileInputModule
    ],
})
export class SharedModule {
}
