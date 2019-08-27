import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/_services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignInComponent>,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group(
      {
        username :['', Validators.required],
        password : ['', Validators.required]
      }
    )
  }

  onCloseClick(){
    this.dialogRef.close();
  }

  onSubmit(){
    this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value).then(()=>this.dialogRef.close());
  }

}
