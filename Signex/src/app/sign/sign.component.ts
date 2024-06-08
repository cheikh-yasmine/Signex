import { Component } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  signeddoc: boolean = false;
  signed(){
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
      title: "Document Signed successfully"
      
    });
    setTimeout(() => {
      this.signeddoc = true;
    }, 3500);  }

 
}
