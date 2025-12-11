import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
// this is a class all things need to be declare here

//in js varibles declare like
// Var courseName= "Angular21"
// String Variable
courseName : string = "Angular 21"
currentVersion = "v.21"


// Numbers
rollNo: number = 121;
productPrice = 465.48;

//Boolean value
isActive: boolean = false;
isPresent: boolean = true;

// date

currentDate : Date = new Date()
// List
cityList: string[] =["Pune","Mumbai","Hyderabad"]
//Array
rollNoArray: number[]=[1,3,26,59,49,4]
//obj

studentObj ={
  name:"chetan",
  mobile:"4549845156",
  email:"kunalgaikwad@gmail.com"
}

studentList= [
  {name:"abs",city:"pune"},
  {name:"fds",city:"hyd"},
  {name: "mdk", city:"mumbai"}
]

constructor(){
  this.courseName = "bsikd";
  this.rollNo = 5664;
}
}
