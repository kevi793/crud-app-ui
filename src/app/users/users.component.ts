import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.users$ = this.userService.getAllUsersWithAddresses();
  }

  addUser(): void {
    console.log('Add user');
    this.router.navigate(["/user-add"]);
  }

  viewUser(user: User): void {
    console.log("View user", user);
    this.router.navigate(['/user-details/' + user.id]);
  }

  editUser(user: User): void {
    console.log("View user", user);
    this.router.navigate(['/user-edit/' + user.id]);
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id).subscribe({
      next: () => {
        console.log('User deleted: ', user);
        this.users$ = this.userService.getAllUsersWithAddresses();
      }
    });

  }

}
