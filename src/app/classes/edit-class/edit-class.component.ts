import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProgramService} from "../../service/program/program.service";
import {Program} from "../../interface/program";
import {ClassesService} from "../../service/classes/classes.service";
import {Classes} from "../../interface/classes";
import {Module} from "../../interface/module";
import {Lecture} from "../../interface/lecture";
import {Classroom} from "../../interface/classroom";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  sub: Subscription;
  name: string;
  id: number;
  currentClassTime: string;
  currentProgram: Program;
  currentModule: string;
  currentInstructor: Lecture;
  currentCoach: Lecture;
  currentTutors: Lecture[] = [];
  currentClassroom: Classroom;
  classForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    classTime: new FormControl(),
    program: new FormControl(),
    module: new FormControl()
  });
  classTime: string[] = [];
  listProgram: Program[] = [];
  listModule: Module[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private programService: ProgramService,
              private classesService: ClassesService) {
  }

  ngOnInit() {
    this.classTime = ["G", "H", "I", "K"];
    this.getAllProgram();
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getClassesInfo(this.id);
    });
  }

  getAllProgram() {
    this.programService.getAllProgram().subscribe(listProgram => {
      this.listProgram = listProgram;
    })
  }

  getClassesInfo(id: number) {
    this.classesService.getClasses(id).subscribe(classes => {
      this.name = classes.name;
      this.id = classes.id;
      this.currentClassTime = classes.classTime;
      this.currentProgram = classes.program
      this.currentModule = classes.module;
      this.currentTutors = classes.tutors;
      this.currentCoach = classes.coach;
      this.currentInstructor = classes.instructor;
      this.currentClassroom = classes.classroom;
      this.getAllModuleByProgram(this.currentProgram);
    });
  }

  getAllModuleByProgram(program: Program) {
    this.programService.getAllModuleByProgram(program.id).subscribe(listModule => {
      this.listModule = listModule;
    })
  }

  updateClass(id: number) {
    const classes: Classes = {
      id: this.classForm.value.id,
      name: this.classForm.value.name === '' ? this.name : this.classForm.value.name,
      classTime: this.classForm.value.classTime == null ? this.currentClassTime : this.classForm.value.classTime,
      program: {
        id: this.classForm.value.program == null ? this.currentProgram.id : this.classForm.value.program
      },
      module: this.classForm.value.module == null ? this.currentModule : this.classForm.value.module,
      classroom: this.currentClassroom,
      instructor: this.currentInstructor,
      coach: this.currentCoach,
      tutors: this.currentTutors
    };
    this.classesService.updateClasses(id, classes).subscribe(() => {
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
