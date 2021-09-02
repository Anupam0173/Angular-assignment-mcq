import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable(
  {
  providedIn: 'root'
  }
)
export class TestdataServiceService {

  Examscore:number=0;
  no_of_questions:number=0;
  

  constructor(private http:HttpClient) { }

  getTestdata()
  {
    return this.http.get('http://interviewapi.stgbuild.com/getQuizData');

  }

}
