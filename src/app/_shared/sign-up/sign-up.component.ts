import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ɵangular_packages_forms_forms_w } from '@angular/forms';
import localeRo from '@angular/common/locales/ro';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public registerForm: FormGroup

  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<SignUpComponent>,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      { username: ['', Validators.required],
        email: ['',[Validators.required, Validators.email]],
        gender: ['', Validators.required],
        birthdate: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]},
        {validator: this.checkPasswords}
    );
  }

  onCloseClick(){
    this.dialogRef.close();
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true }     
  }

  onSubmit(){
    let registerData={
      username: this.registerForm.controls.username.value,
      email: this.registerForm.controls.email.value,
      gender: this.registerForm.controls.gender.value,
      birthdate: this.datePipe.transform(this.registerForm.controls.birthdate.value,'yyyy-MM-dd'),
      password: this.registerForm.controls.password.value
    }
    this.authService.register(registerData).then(()=>this.dialogRef.close())
  }
}
