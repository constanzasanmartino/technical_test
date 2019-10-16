import { Component, OnInit, Input } from '@angular/core';
import { IObjective } from '../../../models/objectives.interface';
import { GeneralDataService } from '../../../services/general-data.service';

@Component({
  selector: 'app-table-objectives',
  templateUrl: './table-objectives.component.html',
  styleUrls: ['./table-objectives.component.css']
})
export class TableObjectivesComponent implements OnInit {

  objectives: IObjective[];
  objectivesDataReady: boolean = false;

  constructor(private generalDataService: GeneralDataService) {
    this.generalDataService.getObjectives().subscribe((response: IObjective[]) => {
      console.log('Objs');
      console.log(response);
      this.objectives = response;
      this.objectivesDataReady = true;
    });
  }

  ngOnInit() {
  }

}
