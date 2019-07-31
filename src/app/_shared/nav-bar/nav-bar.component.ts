import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openSigninModal() {
    const signinRef = this.dialog.open(SignInComponent);
  }

  // closeSigninModal(){
  //   this.signinRef.close();
  // }

  openSignupModal() {
    const signupRef = this.dialog.open(SignUpComponent);
  }

  // closeSignupModal(){
  //   this.signupRef.close();
  // }


}
