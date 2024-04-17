import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from './Models/user-model';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
 
  user :User={
    id: -1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    companyName: "",
    phone: "",
    creationDate: new Date() ,
   
  }
  
 
 
  
  constructor(private http: HttpClient,private router : Router ,private formBuilder: FormBuilder,private userService:UserService){
  }
  forminput!:FormGroup;
  forminput1!:FormGroup;
  forminput2!:FormGroup;
  forminput3!:FormGroup;
  forminput4!:FormGroup;
  forminput5!:FormGroup;

  ngOnInit(): void {
    this.forminput=this.formBuilder.group(
      {
        'name':['',[Validators.required]]
      }
    );

    this.forminput1=this.formBuilder.group(
      {
        'LastName':['',[Validators.required]]
      }
    );

    this.forminput2=this.formBuilder.group(
      {
        'username':['',[Validators.required]]
      }
    );
      
    this.forminput3=this.formBuilder.group(
      {
        'email':['',[Validators.required,Validators.email]]
      }
    );

    this.forminput4=this.formBuilder.group(
      {
        'password':['',[Validators.required]]
      }
    );

    this.forminput5=this.formBuilder.group(
      {
        'confirmpwd':['',[Validators.required]]
      }
    );
  

  }

  gotoSignin(){
    this.router.navigate(['signin']);
  }
  gotosignup(){
    this.router.navigate(['signup']);
  }



 

  register() {
    this.userService.register(this.user)
      .subscribe(newUser => {
        console.log('User registered successfully:', newUser);
        this.router.navigate(['signin']);
      }, error => {
        console.error('Error registering user:', error);
        alert('An error occurred. Please try again later.');
      });
  }

    
    onPhoneKeyPress(event: KeyboardEvent) {
    const charCode = event.charCode || event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}

