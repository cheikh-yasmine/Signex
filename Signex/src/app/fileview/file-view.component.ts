import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { FileUploadEntity } from '../Models/FileUploadEntity';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {
  files: FileUploadEntity[] = []; 

  constructor(private fileService: FileService , private router : Router) { }

  ngOnInit() {
    this.getFiles(); 
  }
  getFiles() {
    this.fileService.getAllFiles()
      .subscribe(files => {
        this.files = files;
      });
  }
  deleteFile(file : FileUploadEntity){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
 
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true,
    
 
  }).then((result) => {
    if (result.isConfirmed) {
      this.fileService.deleteFile(file.fileId).subscribe(
       () => console.log(`File with ID ${file.fileId} deleted successfully`),
       
    (error) => console.error(`Error deleting file: ${error.message}`)
      );
     
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
        
         });
       
    } else if (
      
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your file is safe :)",
        icon: "error"
      });
    }
   
  });


}
refresh(){
  window.location.reload();
}
 
 gotosend(){
  this.router.navigate(['mail']);
 }
  
  }
