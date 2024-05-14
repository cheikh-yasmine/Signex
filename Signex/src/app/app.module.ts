import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FileViewComponent } from './fileview/file-view.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { UsernavComponent } from './usernav/usernav.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UseraboutComponent } from './userabout/userabout.component';
import { AdminComponent } from './admin/admin.component';
import { HelppageComponent } from './helppage/helppage.component';
import { MailComponent } from './mail/mail.component';
import { TrashBinComponent } from './trash-bin/trash-bin.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { VisitorCodeComponent } from './visitor-code/visitor-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    HomepageComponent,
    

    UploadFileComponent,
     FileViewComponent,
     AboutComponent,
     ProfileComponent,
     UsernavComponent,
     UserhomeComponent,
     UseraboutComponent,
     AdminComponent,
     HelppageComponent,
     MailComponent,
     TrashBinComponent,
     VisitorCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule, PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);