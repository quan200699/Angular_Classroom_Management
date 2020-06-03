import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {Classes} from "../../interface/classes";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentService} from "../../service/student/student.service";
import {Student} from "../../interface/student";
import {ClassesService} from "../../service/classes/classes.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  sub: Subscription;
  name: string;
  id: number;
  studentId: string;
  currentClass: Classes;
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    studentId: new FormControl(''),
    classes: new FormControl()
  });
  listClasses: Classes[];
  buttonChangeClicked: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService,
              private classesService: ClassesService) {
    this.buttonChangeClicked = false;
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getStudentInfo(id);
    });
  }

  ngOnInit() {
    this.getAllClasses();
  }

  changeButtonStatus() {
    this.buttonChangeClicked = !this.buttonChangeClicked;
  }

  getAllClasses() {
    this.classesService.getAllClasses().subscribe(listClasses => {
      this.listClasses = listClasses;
    })
  }

  getStudentInfo(id: number) {
    this.studentService.getStudent(id).subscribe(student => {
      this.name = student.name;
      this.id = student.id;
      this.studentId = student.studentId;
      this.currentClass = student.classes;
    });
  }

  updateStudent(id: number) {
    const student: Student = {
      id: this.studentForm.value.id,
      studentId: this.studentForm.value.studentId === '' ? this.studentId : this.studentForm.value.studentId,
      name: this.studentForm.value.name === '' ? this.name : this.studentForm.value.name,
      classes: {
        id: this.studentForm.value.classes === '' ? this.currentClass.id : this.studentForm.value.classes
      },
    };
    this.studentService.updateStudent(id, student).subscribe(() => {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'success',
          title: 'Cập nhật thành công'
        });
      });
    }, () => {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Cập nhật thất bại'
        });
      });
    });
  }
}
