import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignUpComponent>) { }

  ngOnInit() {
  }

  onCloseClick(){
    this.dialogRef.close();
  }
}
