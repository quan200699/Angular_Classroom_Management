import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProgramService} from "../../service/program/program.service";
import {Program} from "../../interface/program";
import {ClassesService} from "../../service/classes/classes.service";
import {Classes} from "../../interface/classes";
import {Module} from "../../interface/module";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  sub: Subscription;
  currentClass: Classes;
  classForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    classTime: new FormControl(),
    program: new FormControl(),
    module: new FormControl()
  });
  classTime: string[] = [];
  listProgram: Program[] = [];
  listModule: Module[] = [];
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private programService: ProgramService,
              private classesService: ClassesService) {
  }

  ngOnInit() {
    this.classTime = ["G", "H", "I", "K"];
    this.getAllProgram();
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentClass = await this.getClassesInfo(this.id);
      this.getAllModuleByProgram(this.currentClass.program)
    });
  }

  getAllProgram() {
    this.programService.getAllProgram().subscribe(listProgram => {
      this.listProgram = listProgram;
    })
  }

  getClassesInfo(id: number) {
    return this.classesService.getClasses(id).toPromise();
  }

  getAllModuleByProgram(program: Program) {
    this.programService.getAllModuleByProgram(program.id).subscribe(listModule => {
      this.listModule = listModule;
    })
  }

  updateClass(id: number) {
    const classes: Classes = {
      id: this.classForm.value.id,
      name: this.classForm.value.name === '' ? this.currentClass.name : this.classForm.value.name,
      classTime: this.classForm.value.classTime == null ? this.currentClass.classTime : this.classForm.value.classTime,
      program: {
        id: this.classForm.value.program == null ? this.currentClass.program.id : this.classForm.value.program
      },
      module: this.classForm.value.module == null ? this.currentClass.module : this.classForm.value.module,
      classroom: this.currentClass.classroom,
      instructor: this.currentClass.instructor,
      coach: this.currentClass.coach,
      tutors: this.currentClass.tutors
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
