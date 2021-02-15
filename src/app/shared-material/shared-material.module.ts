import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule
    ]
})
export class SharedMaterialModule {
}
