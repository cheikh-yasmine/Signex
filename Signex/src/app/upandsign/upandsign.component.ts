import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileService } from '../file.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upandsign',
  templateUrl: './upandsign.component.html',
  styleUrls: ['./upandsign.component.css']
})
export class UpandsignComponent {
  file: File | null = null;
 
  description: string = '';
  uploadError: string | null = null;
  uploadSuccess: boolean = false;
 
  constructor(private http: HttpClient, private fileService: FileService ,private authenticationService : AuthenticationService, private router: Router) {}
  
  onFileSelected(event: any) {
    this.file = event.target.files[0];

    
  }

  uploadFile() {
    if (!this.file) {
      this.uploadError = 'Please select a file to upload.';
      return; // Exit the function if no file is selected
    }
  
    

    const formData = new FormData();
   
    formData.append('description', this.description);
    formData.append('file', this.file, this.file.name);
   
    


    this.http.post('http://localhost:8080/api/files', formData)
      .subscribe({
        next: (response) => {
          this.uploadSuccess = true;
          this.uploadError = null; // Clear any previous errors
         
        },
        error: (error: HttpErrorResponse) => {
          this.uploadError = 'An error occurred during upload: ' + error.message;
          this.uploadSuccess = false;
        }
      });
    
      
  }

  goToSuccessPage() {
    this.router.navigate(['/Mydocuments']); 
  }
  
}
