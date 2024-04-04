import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MyDocComponent } from './my-doc/my-doc.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { AboutComponent } from './about/about.component';




const routes: Routes = [
  {path :'signup',component:SignupComponent},
  {path :'signin',component:SigninComponent},
  {path :'Mydocuments',component:MyDocComponent},
  {path :'home',component:HomepageComponent}, 
  {path :'uploadFile',component:UploadFileComponent}, 
  {path :'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

