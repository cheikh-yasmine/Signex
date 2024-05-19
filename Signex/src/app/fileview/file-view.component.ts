import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { FileUploadEntity } from '../Models/FileUploadEntity';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {
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
 selectFile(file: FileUploadEntity, event: any) {
  this.selectedFiles[file.fileId] = event.target.checked;
}
 viewPDF(file: FileUploadEntity) {
  this.selectedFile = file;
  if (this.selectedFile) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.pdfSrc = e.target.result; // Ensure it's a valid data URL
    };
    reader.readAsDataURL(this.selectedFile.file);
  }
}
}
