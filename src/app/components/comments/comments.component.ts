import { Component, OnInit } from '@angular/core';
import { GeneralDataService } from '../../services/general-data.service';
import { IComment } from '../../models/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  showComments: boolean = false;
  comments: IComment[];

  constructor( private generalDataService: GeneralDataService ) { 
    this.generalDataService.getComments().subscribe((response:IComment[]) => {
      this.comments = response;
    })

  }

  ngOnInit() {
  }

  show(){
    if(this.showComments) {
      this.showComments = false;
    } else {
      this.showComments = true;
    }

  }

}
