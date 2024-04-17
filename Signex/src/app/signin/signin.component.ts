import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponseDTO } from './auth-response.dto';
import { UserService } from '../user.service';
import { error } from 'jquery';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  loginForm!: FormGroup;

  
  username:String="";
  password:String="";
 
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  passIcon: HTMLImageElement;
  
  constructor(private http: HttpClient,
    private router : Router, private renderer: Renderer2 , private fb: FormBuilder, private userService: UserService){
      this.passIcon = document.getElementById('pass-icon') as HTMLImageElement;
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Use 'username' for backend compatibility
      password: ['', Validators.required]
    });
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
    login(): void {
      const loginData = {
        username: this.username,
        password: this.password
      };
    this.userService.login(loginData)
      .subscribe(user => {
        if (user) {
          console.log('Login successful');
  
          if (this.username == 'admin' && this.password == 'admin') {  // Use hashed password
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/userhome']); 
          }
  
          localStorage.setItem('userAuth', JSON.stringify({
            username: user.username,
          }));
          localStorage.setItem('isLoggedIn', 'true');
        } else {
          console.log('Invalid username or password');
        }
      }, error => {
        console.error('Error occurred during login:', error);
      });
  }
  
  }



  


