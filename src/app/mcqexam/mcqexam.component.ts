import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { any } from 'sequelize/types/lib/operators';
import { TestdataServiceService } from '../testdata-service.service';

@Component({
  selector: 'app-mcqexam',
  templateUrl: './mcqexam.component.html',
  styleUrls: ['./mcqexam.component.css']
})
export class McqexamComponent implements OnInit {
  examindex:any;
  li:any; 
  testsList:any;
  score:number=0;
  examName:string='';
  questions:any[]=[];
  currentQuest_no:number=0;
  disableStaus=true;   //for next and prev btn
  useranswerSelected:Number[]=[];
  previous_question_marks:Number=0;
  totalquestions:number=0;
  constructor(private testdata:TestdataServiceService,private route: ActivatedRoute) { 
    this.route.params.subscribe((params:Params)=>
    {
      this.examindex=params['examindex'];
    })
  this.totalquestions=this.testdata.no_of_questions;
  }

  ngOnInit(): void {
    this.fetchtestData();
  }

  fetchtestData()
  {
    this.testdata.getTestdata().subscribe((responses)=>{
      this.li=responses;
      this.testsList=this.li.tests;
      this.examName=this.testsList[this.examindex].name;
      this.questions=this.testsList[this.examindex].questions;
      
      // console.log("examName is:",this.questions[0].options);
      // console.log("angualr componenet res=====>",responses);
      // console.log("angular cmp data testsList ==========>",this.testsList);
    }  
    );
  }

  // user_answer_selected array maintaince code
  onclickOption(i:number)
  {
    this.disableStaus=false;
    if(this.useranswerSelected.indexOf(i)==-1)
    {
      this.useranswerSelected.push(i);
    }
    else
    {
      this.useranswerSelected.splice(this.useranswerSelected.indexOf(i),1);
    }
  }

  calculateMarks(ans:number[])
  {  
    if(ans.length>1)
    {
      if(JSON.stringify(ans.sort())==JSON.stringify(this.useranswerSelected.sort()))
      {
        this.score++;
        this.previous_question_marks=1;
      }
      else{
        this.previous_question_marks=0;
      }
    }
    else{
      if(ans==this.useranswerSelected)
      {
        this.score++;
        this.previous_question_marks=1;
      }else{
        this.previous_question_marks=0;
      }
    }
      console.log(ans,"**",this.useranswerSelected,"Your score-->",this.score);
      this.useranswerSelected=[];
  }
  
  onnextAnswer(ans:any){
       this.currentQuest_no++;
        this.disableStaus=true;
        this.calculateMarks(ans);
    }
  
    // onprevAnswer(ans:any){
    //      this.currentQuest_no--;
    //       this.disableStaus=true;

    //       //maintaince of score when user click on previous btn.
    //       if (this.useranswerSelected.length>0)
    //       {this.calculateMarks(ans);}      
    //       if(this.previous_question_marks>0)
    //       {
    //         this.score--;
    //       }
    //   }

      onsubmit(ans:any)
      {
        this.disableStaus=true;
        this.calculateMarks(ans);
        this.testdata.Examscore=this.score;
      }
}
