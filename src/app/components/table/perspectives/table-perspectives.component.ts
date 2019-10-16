import { Component, OnInit } from '@angular/core';
import { IPerspective } from '../../../models/perspective.interface';
import { GeneralDataService } from '../../../services/general-data.service';

@Component({
  selector: 'app-table-perspectives',
  templateUrl: './table-perspectives.component.html',
  styleUrls: ['./table-perspectives.component.css']
})
export class TablePerspectivesComponent implements OnInit {

  perspectives: IPerspective[];
  perspectivesDataReady = false;

  constructor( private generalDataService: GeneralDataService ) {
    this.generalDataService.getPerspectives().subscribe((response:IPerspective[]) => {
      this.perspectives = response;
      this.perspectivesDataReady = true;
    })
   }

  ngOnInit() {
  }

}
