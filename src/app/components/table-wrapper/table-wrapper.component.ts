import { Component, OnInit, Input } from '@angular/core';
import { IObjective } from 'src/app/models/objectives.interface';

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css']
})
export class TableWrapperComponent implements OnInit {

  @Input() objectives: IObjective[];
  
  constructor() { }

  ngOnInit() {
  }


}
