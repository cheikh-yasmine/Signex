import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
 
  username: string="";
  userlastname: string="";
  email: string="";
  pwd: string="";
  usercompanyname: string="";
  userphone: string="";
 
  
  constructor(private http: HttpClient,private router : Router,private formBuilder : FormBuilder){
  }
  forminput!:FormGroup;
  forminput1!:FormGroup;
  forminput2!:FormGroup;
  forminput3!:FormGroup;
  forminput4!:FormGroup;

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
        'email':['',[Validators.required,Validators.email]]
      }
    );

    this.forminput3=this.formBuilder.group(
      {
        'password':['',[Validators.required]]
      }
    );

    this.forminput4=this.formBuilder.group(
      {
        'confirmpwd':['',[Validators.required]]
      }
    );
    this.forminput4 = this.formBuilder.group({
      password: ['', Validators.required], 
      confirmpwd: ['', Validators.required]
    });

  }

  gotoSignin(){
    this.router.navigate(['signin']);
  }
  gotosignup(){
    this.router.navigate(['signup']);
  }
  save(){
    let bodyData = {
      "employeeName": this.username,
      "lastName": this.userlastname,
      "email": this.email,
      "password": this.pwd,
      "companyName": this.usercompanyname,
      "number": this.userphone
    };
this.http.post("http://localhost:8080/api/v1/employee/save", bodyData,{responseType:'text'}).subscribe((resultData: any)=>{
  console.log(resultData);
 
  alert("User registered successfully");
})
  }
}

