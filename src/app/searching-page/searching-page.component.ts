import { Component, OnInit } from '@angular/core';

import { Users } from './users.model';
import { UsersService } from "src/app/users.service";

@Component({
  selector: 'app-searching-page',
  templateUrl: './searching-page.component.html',
  styleUrls: ['./searching-page.component.css']
})
export class SearchingPageComponent implements OnInit {

  userList = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  keyPress(event){
    if (event.key === "Enter") {
      event.preventDefault();
      this.userService.getUsers<Users>(event.target.value)
                        .subscribe((data) => {
                          this.userList = data.items;
                        });
      
    }
  }
}
