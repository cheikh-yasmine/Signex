import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-visitor-code',
  templateUrl: './visitor-code.component.html',
  styleUrls: ['./visitor-code.component.css']
})

export class VisitorCodeComponent {
  constructor (private router : Router){}
 accessGranted(){
 Swal.fire({
  title: "Enter PDF password",
  input: "password",
  inputLabel: "Please enter your password down below",
  inputPlaceholder: "Enter password",
  showCancelButton: true,
  confirmButtonColor: "#003f5a",
  cancelButtonColor: "#e86d1b",
  confirmButtonText: "Verify"
}).then((result) => {
  if (result.isConfirmed) {
    const enteredCode = result.value;
    const isCodeValid = enteredCode === "yassou"; // Replace with actual verification logic

    if (isCodeValid) {
      Swal.fire({
        title: "Access Granted",
        icon: "success"
       
 
      });
      this.router.navigate(['ard']);
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


}