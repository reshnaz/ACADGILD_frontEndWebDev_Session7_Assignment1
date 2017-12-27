import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Declaring variables
  title:string; //This value will be shown in html on button click
  name:string; //Input value
  lastName:string; //Input value
  stitle:boolean = false; //Used by ngIf to add/remove elements from DOM

  // This funtion assigns value to "title"
  // Based on whether or not name & last Name are undefined/empty strings, boolean value is assigned.
  showTitle(fname:string, lname:string){
    this.title=`The name is: ${fname} ${lname}`;
    if((fname==undefined && lname==undefined) || (fname.length==0 && lname.length==0)){
      this.stitle=false;
    }
    else{
      this.stitle=true;
    }
  }
}
