import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-refuse',
  templateUrl: './refuse.component.html',
  styleUrls: ['./refuse.component.css']
})

 
export class RefuseComponent {
constructor(private HttpClient :HttpClient,private Router: Router){}

downornah: boolean = false;
downornah1: boolean = false;
refuse(){
  this.downornah = true;
  
}

download(){
this.downornah1 = true;
this.downloadImage("./../../assets/image/Work-Contract-.png");
}




downloadImage(url: string) {
this.HttpClient.get(url, { responseType: 'blob' }).subscribe(blob => {
    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Education contract THYNK.pdf'; 

    // Append link to the body, click it, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}, error => {
    console.error('Error downloading the image: ', error);
});
}

gotoCalender(){
this.Router.navigate(['/calender']);
}


goVisit(){
Swal.fire({
  imageUrl: "./../../assets/image/signex logo.png",
  imageHeight: 100,
  title: "Thank you for using signex",
  text: "would you like to visit our website ?",
  showCancelButton: false,
  confirmButtonColor: "#00264D",
  confirmButtonText: "Visit"
}).then((result) => {
  if (result.isConfirmed) {
    this.Router.navigate(['/home']);
  }
});
}
}
