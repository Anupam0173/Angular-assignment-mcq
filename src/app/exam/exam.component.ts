import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { any } from 'sequelize/types/lib/operators';
import { TestdataServiceService } from '../testdata-service.service';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  li:any; 
  testsList:any;

  constructor(private testdata:TestdataServiceService,private router: Router) { }
  ngOnInit(): void {
    this.fetchtestData();
  }

  fetchtestData()
  {
    this.testdata.getTestdata().subscribe((responses)=>{
      this.li=responses;
      this.testsList=this.li.tests;
    });
  }

  onStart(examindex:number)
  {

    this.router.navigate(['/mcqexam',examindex]);

    // setting variable of services
    this.testdata.no_of_questions=this.testsList[examindex].questions.length;

  }
}
