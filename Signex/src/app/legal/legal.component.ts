import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { FileService } from '../file.service';
import { Router } from '@angular/router';
import { FileUploadEntity } from '../Models/FileUploadEntity';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent {
  files: FileUploadEntity[] = []; 
  selectedFile: FileUploadEntity | null = null;
  pdfSrc: string | null = null; // Add this line
  selectedFiles: { [key: number]: boolean } = {};
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
        text: "Please refresh the page!",
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

 openpdf(){
  this.router.navigate(['pdf']);
 }

 contact(){
  this.router.navigate(['contacts']);
 }

 agr(){
  this.router.navigate(['agr']);
 }

 medical(){
  this.router.navigate(['medical']);
 }

 
 all(){
  this.router.navigate(['Mydocuments']);
 }
}
