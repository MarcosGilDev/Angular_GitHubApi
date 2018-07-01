import { Component } from '@angular/core';
import 'hammerjs';
import { UsersService } from "src/app/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
}
