import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  
  email: string="";
  password: string="";
  
 
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  passIcon: HTMLImageElement;
  
  constructor(private http: HttpClient,
    private router : Router, private renderer: Renderer2 ){
      this.passIcon = document.getElementById('pass-icon') as HTMLImageElement;
  }
  togglePasswordVisibility(passwordInput: HTMLInputElement): void {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.passIcon.src = './../../assets/image/eye.png';
    } else {
      passwordInput.type = 'password';
      this.passIcon.src = './../../assets/image/eye.png';
    }
  }
  gotosignup(){
      this.router.navigate(['signup']);
    }
    gotoSignin(){
      this.router.navigate(['signin']);
    }
   Login(){
    console.log(this.email);
    console.log(this.password)
    let bodyData={
      email:this.email,
      password: this.password,
    };
    this.http.post("http://localhost:8080/api/v1/employee/login", bodyData).subscribe((resultData:any)=>{
      console.log(resultData);
      if (resultData.message == "Email does Not Exists"){
        alert("This E-mail does Not Exists");
      }
      else if(resultData.message== "Login Success "){
        this.router.navigateByUrl('userhome');
      }
      else {
        alert("Email or password Incorrect ");
      }
    })
  }



  

}
