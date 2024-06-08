import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponseDTO } from './auth-response.dto';
import { UserService } from '../user.service';
import { error } from 'jquery';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  @ViewChild('passwordInput') passwordInput!: ElementRef;
    passIcon: HTMLImageElement;


username:String="";
password:String="";

  constructor(private router : Router,private renderer: Renderer2,private formBuilder:FormBuilder,private userService: UserService) {
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

  forminput!:FormGroup;

  ngOnInit(): void {

    this.forminput=this.formBuilder.group(
      {
        'email':['',[Validators.required,Validators.email]]
      }
    );


  }

  gotoSignin(){
    this.router.navigate(['signin']);
  }

  gotosignup(){
    this.router.navigate(['signup']);
  }

 showVerificationPopup() {
    Swal.fire({
      title: "Enter Verification Code",
      input: "text",
      inputLabel: "Enter the code sent to your email",
      inputPlaceholder: "Verification code",
      showCancelButton: true,
      confirmButtonColor: "#003f5a",
      cancelButtonColor: "#e86d1b",
      confirmButtonText: "Verify"
    }).then((result) => {
      if (result.isConfirmed) {
        const enteredCode = result.value; 
  
     
        const isCodeValid = enteredCode === "123456"; // Replace with actual verification logic
  
        if (isCodeValid) {
          const loginData = {
            username: this.username,
            password: this.password
          };
        this.userService.login(loginData)
          .subscribe(user => {
            if (user) {
              console.log('Login successful');
      
              if (this.username == 'admin' && this.password == 'admin') {  
                this.router.navigate(['/admin']);
              } else {
                this.router.navigate(['/userhome']); 
               
              }
      
              localStorage.setItem('accessToken', JSON.stringify(user)); 
              localStorage.setItem('isLoggedIn', 'true');
            } else {
              console.log('Invalid username or password');
            }
          }, error => {
            console.error('Error occurred during login:', error);
          });
          Swal.fire({
            
            title: "Verification successful!",
            icon: "success"

          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Invalid verification code.",
            icon: "error"
          });
        }
      }
    });
  }
  

  
  login(): void {
    
   
}


  
  }



  


