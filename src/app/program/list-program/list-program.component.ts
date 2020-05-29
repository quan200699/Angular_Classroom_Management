import {Component, OnInit} from '@angular/core';
import {Program} from "../../interface/program";
import {ProgramService} from "../../service/program/program.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-program',
  templateUrl: './list-program.component.html',
  styleUrls: ['./list-program.component.css']
})
export class ListProgramComponent implements OnInit {
  listProgram: Program[];
  id: number;

  constructor(private programService: ProgramService) {
  }

  ngOnInit() {
    this.getAllProgram();
  }

  getProgramId(id: number) {
    this.id = id;
  }

  deleteProgram() {
    this.programService.deleteProgram(this.id).subscribe(() => {
      this.programService.getAllProgram().subscribe(listProgram => {
        this.listProgram = listProgram;
      })
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        Toast.fire({
          type: 'success',
          title: 'Xóa thành công'
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
          title: 'Xóa thất bại'
        });
      });
    })
  }

  getAllProgram() {
    this.programService.getAllProgram().subscribe(listProgram => {
      this.listProgram = listProgram;
      $(function () {
        $('#table-program').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false,
        });
      });
    });
  }
}
