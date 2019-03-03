import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GenerateImageComponent } from '../modals/generate-image/generate-image.component';

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
    const dialogRef = this.dialog.open(GenerateImageComponent, {
      width: '480px',
      position: {
        top: '65px',
      }
    });
  }

}
