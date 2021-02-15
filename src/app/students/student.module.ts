import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {StudentService} from './student.service';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    declarations: [
        CreateComponent
    ],
    exports: [
        CreateComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [
        StudentService,
    ]
})
export class StudentModule {
}
