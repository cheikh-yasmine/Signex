
import { Component, OnInit } from '@angular/core';
import {getMessaging , getToken} from 'firebase/messaging'
import { environnement } from 'src/environnements/environnement';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  ngOnInit(): void {
    this.requestPermission();
  }
  title = 'Signex';
  requestPermission(){
    const messaging = getMessaging();
    getToken(messaging,{vapidKey: environnement.firebase.vpaidKey}).then(
      (currentToken)=>{
        if(currentToken){
           console.log("yes we have the token");
           console.log(currentToken);
        }else{
          console.log("we have a problem")
        }
      }
    )
  }
}
