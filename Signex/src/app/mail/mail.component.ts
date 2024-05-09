import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  recipient: string = '';
    subject: string = '';
    body: string = '';
    attachment: File | null = null;

    constructor(private emailService: EmailService) { }

    onSubmit() {
        const formData = new FormData();
        formData.append('to', this.recipient);
        formData.append('subject', this.subject);
        formData.append('body', this.body);
        if (this.attachment) {
            formData.append('file', this.attachment);
        }

        this.emailService.sendMail(formData)
  .subscribe(response => {
    console.log('Email sent!', response);
    // Handle successful response (e.g., show success message)
  }, error => {
    if (error.status) { // Check for status code
      console.error('Error sending email (status code:', error.status, '):', error.error);
      // Handle specific error based on status and error message
    } else {
      console.error('Network error:', error);
      // Handle network errors
    }
  });

    
    }

    onFileSelected(event: any) {
        this.attachment = event.target.files[0];
    }
}

