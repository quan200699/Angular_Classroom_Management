import {Component, OnInit} from '@angular/core';
import {Program} from "../../interface/program";
import {ProgramService} from "../../service/program/program.service";

declare var $: any;

@Component({
  selector: 'app-list-program',
  templateUrl: './list-program.component.html',
  styleUrls: ['./list-program.component.css']
})
export class ListProgramComponent implements OnInit {
  listProgram: Program[];

  constructor(private programService: ProgramService) {
  }

  ngOnInit() {
    this.getAllProgram();
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
