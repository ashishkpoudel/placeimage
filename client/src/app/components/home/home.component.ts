import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GenerateImageDialogComponent } from '../generate-image-dialog/generate-image-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  handleClick() {
    const dialogRef = this.dialog.open(GenerateImageDialogComponent, {
      width: '480px',
      position: {
        top: '65px',
      }
    });
  }

}
