import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ard',
  templateUrl: './ard.component.html',
  styleUrls: ['./ard.component.css']
})
export class ARDComponent {


  constructor( private router : Router) { }

  sign(){
    this.router.navigate(['sign']);
  }
  
  refuse(){
    this.router.navigate(['refuse']);
  }
  
  pdf(){
    this.router.navigate(['pdf']);
  }
}
