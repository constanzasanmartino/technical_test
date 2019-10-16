import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IComment } from '../models/comment.interface';
import { IObjective } from '../models/objectives.interface';
import { IPerspective } from '../models/perspective.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneralDataService {

  apiBaseURL: string = 'https://my-json-server.typicode.com/pyorlano/cst-frontend-test';

  constructor( private http: HttpClient ) { }

  getObjectives() {
    return this.http.get<IObjective[]>(`${this.apiBaseURL}/objectives`);
  }
  getComments() {
    return this.http.get<IComment[]>(`${this.apiBaseURL}/comments`);
  }

  getPerspectives() {
    return this.http.get<IPerspective[]>(`${this.apiBaseURL}/perspectives`);
  }
}
