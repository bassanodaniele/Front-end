import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  signUpVisible: boolean = false;
  signInVisible: boolean = false;

  showSignUp(): boolean {
    if (this.signUpVisible)
      this.signUpVisible = false;
    else this.signUpVisible = true;
    return false;
  }

  showSignIn(): boolean {
    if (this.signInVisible)
      this.signInVisible = false;
    else this.signInVisible = true;
    return false;
  }

}
