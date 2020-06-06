import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.users = this.usersService.getListUser();
  }



}
