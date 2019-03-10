import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GenerateImageComponent } from '../modals/generate-image/generate-image.component';
import { SEOService } from 'src/app/services/seo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private dialog: MatDialog, private seo_service: SEOService) { }

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
