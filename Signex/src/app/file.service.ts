import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  // constructor(private http: HttpClient) {}
  
  // onFileSelected(event: any) {
  //   this.file = event.target.files[0];

    
  // }

  // uploadFile() {
  //   if (!this.file) {
  //     this.uploadError = 'Please select a file to upload.';
  //     return;
  //   }

  //   if (!this.ownedBy || !this.description) {
  //     this.uploadError = 'Please fill in all required fields.';
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('ownedBy', this.ownedBy);
  //   formData.append('description', this.description);
  //   formData.append('file', this.file, this.file.name);



  //   this.http.post('http://localhost:8080/api/files', formData)
  //     .subscribe({
  //       next: (response) => {
  //         this.uploadSuccess = true;
  //         this.uploadError = null; // Clear any previous errors
  //       },
  //       error: (error: HttpErrorResponse) => {
  //         this.uploadError = 'An error occurred during upload: ' + error.message;
  //         this.uploadSuccess = false;
  //       }
  //     });
    
      
  // }
}
