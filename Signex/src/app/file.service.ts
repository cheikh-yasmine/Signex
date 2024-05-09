import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadEntity } from './Models/FileUploadEntity';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  // private baseUrl: string = 'http://localhost:8080/api/files/getAllFiles'
  // constructor(private http: HttpClient) { }
  // getAllFiles(): Observable<FileUploadEntity[]> {
  //   return this.http.get<FileUploadEntity[]>(this.baseUrl);
  // }
  private baseUrl: string = 'http://localhost:8080/api/files'; // Update baseUrl

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<FileUploadEntity[]> {
    return this.http.get<FileUploadEntity[]>(this.baseUrl+"/getAllFiles" );
  
  }

  deleteFile(fileId: number): Observable<any> { // "any" for flexibility (adjust if backend returns specific data)
    return this.http.delete<any>(`${this.baseUrl}/delete/${fileId}`);
  }
}


