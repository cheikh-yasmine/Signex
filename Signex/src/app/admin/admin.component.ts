import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user-model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
declare var $:any;
import Swal from 'sweetalert2'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  users: User[] = [];
  currentUser!: User;
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

  }
  constructor(private userService: UserService, private router: Router) {}
  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
  UserToDelete!:User;
  

  

  deleteUser()
  {
    Swal.fire({
      title: "Are you sure you want to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
       
        Swal.fire({
          title: "Deleted!",
          text: "This user has been deleted.",
          icon: "success"
        });
      }
    });
    // this.userService.deleteUser(this.UserToDelete.username)
    // .subscribe(() =>{
    //   console.log("deleted")
     
    //   window.location.reload();

    // })

  }




  updateUser(id :number)
  {
  this.router.navigate(["/update",id])
  }


  gotoSignup(){
    this.router.navigate(["/signup"])
  }
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
  }

}
