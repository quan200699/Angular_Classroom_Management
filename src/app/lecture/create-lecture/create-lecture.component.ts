import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LectureService} from "../../service/lecture/lecture.service";
import {Lecture} from "../../interface/lecture";
import {JobService} from "../../service/job/job.service";
import {LanguageService} from "../../service/language/language.service";
import {Job} from "../../interface/job";
import {Language} from "../../interface/language";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-create-lecture',
  templateUrl: './create-lecture.component.html',
  styleUrls: ['./create-lecture.component.css']
})
export class CreateLectureComponent implements OnInit {
  lectureForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    job: new FormControl(),
    language: new FormControl()
  });
  listJob: Job[];
  listLanguage: Language[];

  constructor(private lectureService: LectureService,
              private jobService: JobService,
              private languageService: LanguageService) {
    this.getAllLanguage();
    this.getAllJob();
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#lecture-form').validate({
        rules: {
          name: {
            required: true
          },
          job: {
            required: true
          },
          language: {
            required: true
          }
        },
        messages: {
          name: {
            required: 'Hãy nhập tên giảng viên'
          },
          job: {
            required: 'Hãy nhập thời gian làm việc'
          },
          language: {
            required: 'Hãy nhập ngôn ngữ lập trình'
          },
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {
          error.addClass('invalid-feedback');
          element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
          $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).removeClass('is-invalid');
        }
      });
    });
  }

  getAllLanguage() {
    this.languageService.getAllLanguage().subscribe(listLanguage => {
      this.listLanguage = listLanguage;
    })
  }

  getAllJob() {
    this.jobService.getAllJob().subscribe(listJob => {
      this.listJob = listJob;
    })
  }

  createLecture() {
    const lecture: Lecture = {
      id: this.lectureForm.value.id,
      name: this.lectureForm.value.name,
      job: this.lectureForm.value.job,
      language: this.lectureForm.value.language
    };
    if (lecture.name !== "" && lecture.job != null) {
      this.lectureService.createLecture(lecture).subscribe(() => {
        $(function () {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Tạo mới thành công'
          });
        });
        this.lectureForm.reset();
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
            title: 'Tạo mới thất bại'
          });
        });
      });
    }
  }
}
