import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Assuming your service path
import { User } from '../Models/user-model';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: User[] = [];
  user!:User;
  currentUser!: User;
  userId!: number;
    accessToken!: any;


  ngOnInit(): void {
    const userAccessToken = localStorage.getItem("accessToken"); 

    const userData = localStorage.getItem("accessToken");
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }


    this.getAllUsers();

    this.getUserById(3);
  }


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {}

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }


  getUserById(id: number): void {
    this.userService.getUserById(id).subscribe(user => {
      this.currentUser = user;
    }, error => {
      console.error('Error fetching user:', error);
    });
  }
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
  }


}

