import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { HomepageComponent } from './homepage/homepage.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { FileViewComponent } from './fileview/file-view.component';
import { UsernavComponent } from './usernav/usernav.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UseraboutComponent } from './userabout/userabout.component';
import { AdminComponent } from './admin/admin.component';
import { HelppageComponent } from './helppage/helppage.component';
import { MailComponent } from './mail/mail.component';
import { TrashBinComponent } from './trash-bin/trash-bin.component';
import { VisitorCodeComponent } from './visitor-code/visitor-code.component';
import { PdfComponent } from './pdf/pdf.component';
import { UploadchoiceComponent } from './uploadchoice/uploadchoice.component';
import { UpandsignComponent } from './upandsign/upandsign.component';
import { ARDComponent } from './ard/ard.component';
import { SignComponent } from './sign/sign.component';
import { RefuseComponent } from './refuse/refuse.component';
import { SentComponent } from './sent/sent.component';
import { ContractsComponent } from './contracts/contracts.component';
import { AgreementComponent } from './agreement/agreement.component';
import { LegalComponent } from './legal/legal.component';





const routes: Routes = [
  {path :'signup',component:SignupComponent},
  {path :'signin',component:SigninComponent},
  {path :'Mydocuments',component: FileViewComponent},
  {path :'home',component:HomepageComponent}, 
  {path :'uploadFile',component:UploadFileComponent}, 
  {path :'about',component:AboutComponent},
  {path :'profile',component:ProfileComponent},
  {path: 'usernav', component:UsernavComponent},
  {path: 'userhome', component:UserhomeComponent},
  {path: 'userabout', component:UseraboutComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'help', component:HelppageComponent},
  {path: 'mail', component:MailComponent},
  {path: 'trash', component: TrashBinComponent},
  {path: 'verification' , component: VisitorCodeComponent},
  {path: 'pdf' , component: PdfComponent},
  {path: 'choice' , component: UploadchoiceComponent},
  {path: 'upsign' , component: UpandsignComponent},
  {path: 'ard' , component: ARDComponent},
  {path: 'sign' , component: SignComponent},
  {path: 'refuse' , component: RefuseComponent},
  {path: 'sent' , component: SentComponent},
  {path: 'contacts' , component: ContractsComponent},
  {path: 'agr' , component: AgreementComponent},
  {path: 'medical' , component: LegalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

