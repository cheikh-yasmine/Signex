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
  

}
