import { Component, Input, OnInit } from '@angular/core';
import { TestdataServiceService } from '../testdata-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private testdata:TestdataServiceService) { }

  ngOnInit(): void {
  }

 marks=this.testdata.Examscore;
 totalquestions=this.testdata.no_of_questions;
 wrong_ans=this.totalquestions-this.marks;
 

}
