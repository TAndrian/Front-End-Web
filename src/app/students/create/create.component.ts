import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {StudentService} from '../student.service';
import {Student} from '../../shared/model/student';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newStudentForm = new FormGroup({
    name: new FormControl(''),
    profId: new FormControl(''),
  });
  constructor(
      private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const name = this.newStudentForm.controls.name.value;
    const profId = this.newStudentForm.controls.profId.value;
    this.studentService.post(new Student(name, profId)).subscribe(
        (res: HttpResponse<any>) => {console.log(res.headers.get('Location')); }
    );
  }
}
