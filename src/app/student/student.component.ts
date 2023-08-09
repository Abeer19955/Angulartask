import { Component } from '@angular/core';
interface StudentList{
  name:string;
  email:string;
  marks:number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  StudentList: any[]=[
    {name:'Abeer',email:'abeer@gmail.com',mark:55},
    {name:'sultan',email:'sultan@gmail.com',mark:40}]

}
