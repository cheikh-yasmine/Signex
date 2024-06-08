import { Component } from '@angular/core';

@Component({
  selector: 'app-refuse',
  templateUrl: './refuse.component.html',
  styleUrls: ['./refuse.component.css']
})
export class RefuseComponent {
  downornah: boolean = false;
download(){
  this.downornah = true;
}
}
