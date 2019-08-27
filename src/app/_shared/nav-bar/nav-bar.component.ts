import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public authservice: AuthService
    ) { }

  ngOnInit() {
  }

  openSigninModal() {
    const signinRef = this.dialog.open(SignInComponent);
  }
  
  openSignupModal() {
    const signupRef = this.dialog.open(SignUpComponent);
  }

  get isAuth():boolean{
    return this.authservice.isAuth
  }

  get currentUser():string{
    return this.authservice.currentUser.username
  }

  logout(){
    this.authservice.logout()
  }

}
