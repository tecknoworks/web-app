import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RisService } from 'src/app/_services/ris.service';
import { RisResult } from 'src/app/_models/ris-result';

@Component({
  selector: 'app-frame-details',
  templateUrl: './frame-details.component.html',
  styleUrls: ['./frame-details.component.scss']
})
export class FrameDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FrameDetailsComponent>,
    private _risService: RisService) { }

  ngOnInit() {
  }

  public get risResult(): RisResult{
    return this._risService.risResult
  }
}
