import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { FileUploadEntity } from '../Models/FileUploadEntity';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {
  files: FileUploadEntity[] = []; 

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.getFiles(); 
  }
  getFiles() {
    this.fileService.getAllFiles()
      .subscribe(files => {
        this.files = files;
      });
  }
 


  deleteFile(file: FileUploadEntity) {
    console.log("File to delete:", file.fileId); // Log the file ID before making the request
  
    this.fileService.deleteFile(file.fileId)
      .subscribe(response => {
        console.log("File deleted successfully:", response); // Log the response on success
        // Update local files array on successful deletion
      }, error => {
        console.error('Error deleting file:', error); // Log the error object on error
        // Display an error message to the user (optional)
      });
  }
  }
