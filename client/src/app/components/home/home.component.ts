import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = "asdhasd";

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  handleClick() {
    this.dialog
  }

}
