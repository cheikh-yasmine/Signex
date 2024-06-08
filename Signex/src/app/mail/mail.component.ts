import { Component } from '@angular/core';
import { EmailService } from '../email.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  recipient: string = '';
    subject: string = '';
    body: string = '';
 
    codecreation: boolean = false;

    constructor(private emailService: EmailService , private router : Router) { }

   thecode (){
    
    this.codecreation= true;
   }

   emailsent(){
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "E-mail sent successfully"
    });
   this.router.navigate(['/Mydocuments']);
   }
 
}

