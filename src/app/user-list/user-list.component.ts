import { Component, OnInit } from '@angular/core';
import { Usr } from '../models/usr';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Usr[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  public remove(id: number) {
    console.log(id);
    this.userService.delete(id).subscribe(
      res => {
        console.log(res); // Get the ID from backend...
        this.ngOnInit();
      },
      err => {
        console.log('Error occured');
      }
    );
  }
}
