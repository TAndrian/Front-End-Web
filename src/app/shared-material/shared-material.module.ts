import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatToolbarModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatToolbarModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
    ]
})
export class SharedMaterialModule {
}
