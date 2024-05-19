import { Component } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-visitor-code',
  templateUrl: './visitor-code.component.html',
  styleUrls: ['./visitor-code.component.css']
})
export class VisitorCodeComponent {

// accessGranted(){
//   Swal.fire({
//     title: "Enter Verification Code",
//     input: 'text', // Use single quotes for consistency with other string literals
//     inputLabel: "Verification Code",
//     inputPlaceholder: "Enter the code sent to your email",
//     showCancelButton: true,
//     confirmButtonColor: "#003f5a",
//     cancelButtonColor: "#e86d1b",
//     confirmButtonText: "Verify",
//     preConfirm: (enteredCode) => { // Use preConfirm for validation
//       return new Promise((resolve, reject) => {
//         if (enteredCode === "") { // Check for empty input first
//           reject('Please enter the verification code.');
//         } else if (enteredCode !== "123456") { // Validate against correct code
//           reject('Invalid verification code. Please try again.');
//         } else {
//           resolve(); // Code is valid, proceed with verification
//         }
//       });
//     }
//   }).then((result) => {
//     if (result.isDismissed) { // Handle both confirmed and dismissed scenarios
//       console.log('User cancelled verification.');
//     } else if (result.value) { // Check if value exists (preConfirm resolved)
//       Swal.fire({
//         title: "Verification successful!",
//         icon: "success"
//       });
//     }
//   }).catch(error => { // Handle errors from preConfirm
//     Swal.fire({
//       title: "Error",
//       text: error,
//       icon: "error"
//     });
//   });
//   }}
}
