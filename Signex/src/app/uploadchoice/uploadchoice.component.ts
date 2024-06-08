import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadchoice',
  templateUrl: './uploadchoice.component.html',
  styleUrls: ['./uploadchoice.component.css']
})
export class UploadchoiceComponent {
constructor( private router : Router){}


  gotoupload(){
  this.router.navigate(['/uploadFile']); 
}

gotoupsign(){

  this.router.navigate(['/upsign']); 
}
}
