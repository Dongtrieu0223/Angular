import { Component, OnInit } from '@angular/core';
import { Student } from '../model/Student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  searchRate='1';
  searchName='';
  rate1=false;
  constructor() { }
  students: Student[]=[
    {
      name:'student1',
      age:'18',
      rate:'5',
  },
    {
      name:'student2',
      age:'30',
      rate:'4',
  },
    {
      name:'student3',
      age:'25',
      rate:'5',
  },
    {
      name:'student4',
      age:'21',
      rate:'2',
  },
    {
      name:'student5',
      age:'24',
      rate:'1',
  },
    {
      name:'student6',
      age:'23',
      rate:'3',
  },
    {
      name:'student7',
      age:'40',
      rate:'4',
  },
    {
      name:'student8',
      age:'15',
      rate:'2',
  },
  ]
  ngOnInit(): void {
  }
  search(value:string){
    this.searchName=value;
  }
  rate=false;
  rateChange(){
    
  }
}
