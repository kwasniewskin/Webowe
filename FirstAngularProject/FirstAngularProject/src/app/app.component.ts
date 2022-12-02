import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string = "";
  user:string = "admin";
  password: string = "admin";

  LogIn(user: string, password: string) {
    if(user == this.user && password == this.password){
      this.message = "You are logged in";
    } else {
      this.message = "Invalid data";
    }
  }
}
