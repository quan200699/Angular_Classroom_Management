import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Job} from "../../interface/job";
import {Language} from "../../interface/language";
import {LectureService} from "../../service/lecture/lecture.service";
import {LanguageService} from "../../service/language/language.service";
import {JobService} from "../../service/job/job.service";
import {Lecture} from "../../interface/lecture";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-lecture',
  templateUrl: './edit-lecture.component.html',
  styleUrls: ['./edit-lecture.component.css']
})
export class EditLectureComponent implements OnInit {
  sub: Subscription;
  name: string;
  currentJob: Job;
  id: number;
  currentLanguages: Language[];
  listJob: Job[];
  listLanguage: Language[];
  selectedLanguageList: any[] = [];
  lectureForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    job: new FormControl(),
    language: new FormControl()
  });


  constructor(private activatedRoute: ActivatedRoute,
              private lectureService: LectureService,
              private languageService: LanguageService,
              private jobService: JobService,) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getLectureInfo(id);
    });
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

  getLectureInfo(id: number) {
    this.lectureService.getLecture(id).subscribe(lecture => {
      this.name = lecture.name;
      this.id = lecture.id;
      this.currentJob = lecture.job;
      this.currentLanguages = lecture.languages
    });
  }

  addLanguageToList(id: number) {
    if (this.selectedLanguageList.length == 0) {
      this.selectedLanguageList.push(id);
    } else {
      let index = -1;
      for (let i = 0; i < this.selectedLanguageList.length; i++) {
        if (this.selectedLanguageList[i] == id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.selectedLanguageList.push(id);
      } else {
        this.removeLanguageFromList(index);
      }
    }
  }

  removeLanguageFromList(index: number): any[] {
    let listLanguage = [];
    if (index == 0) {
      listLanguage = this.selectedLanguageList;
      listLanguage.shift();
    } else if (index == this.selectedLanguageList.length - 1) {
      listLanguage = this.selectedLanguageList;
      listLanguage.pop();
    } else {
      for (let i = 0; i < index; i++) {
        listLanguage.push(this.selectedLanguageList[i]);
      }
      for (let i = index; i < this.selectedLanguageList.length - 1; i++) {
        listLanguage.push(this.selectedLanguageList[i + 1]);
      }
    }
    return listLanguage;
  }

  async updateLecture(id: number) {
    const lecture: Lecture = {
      id: this.lectureForm.value.id,
      name: this.lectureForm.value.name === '' ? this.name : this.lectureForm.value.name,
      job: {
        id: this.lectureForm.value.job == null ? this.currentJob.id : this.lectureForm.value.job
      },
      languages: this.currentLanguages
    };
    for (let i = 0; i < this.selectedLanguageList.length; i++) {
      const language = await this.getLanguage(this.selectedLanguageList[i]);
      lecture.languages.push(language);
    }
    this.lectureService.updateLecture(id, lecture).subscribe(() => {
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

  getLanguage(id: number) {
    return this.languageService.getLanguage(id).toPromise();
  }
}
