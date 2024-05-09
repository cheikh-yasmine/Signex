import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadEntity } from './Models/FileUploadEntity';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl: string = 'http://localhost:8080/api/files/getAllFiles'
  constructor(private http: HttpClient) { }
  getAllFiles(): Observable<FileUploadEntity[]> {
    return this.http.get<FileUploadEntity[]>(this.baseUrl);
  }
}



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { FileUploadEntity } from './file-upload.entity';

// @Injectable({
//   providedIn: 'root'
// })
// export class FileService {

//   private baseUrl: string = 'http://localhost:8080/api/files'; // Replace with your actual backend API base URL

//   constructor(private http: HttpClient) { }

//   getAllFiles(): Observable<FileUploadEntity[]> {
//     return this.http.get<FileUploadEntity[]>(this.baseUrl);
//   }

//   // ... other methods for additional functionalities (optional)
// }
