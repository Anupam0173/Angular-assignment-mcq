import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { McqexamComponent } from './mcqexam/mcqexam.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path:'',component:ExamComponent},
  { path:'mcqexam/:examindex',component:McqexamComponent},
  { path:'Result',component:ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
