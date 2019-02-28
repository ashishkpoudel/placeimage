import { Component, OnInit } from '@angular/core';

export interface ImageFormat {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-generate-image-dialog',
  templateUrl: './generate-image-dialog.component.html',
  styleUrls: ['./generate-image-dialog.component.css']
})
export class GenerateImageDialogComponent implements OnInit {

  image_formats: ImageFormat[] = [
    { value: 'png', viewValue: 'Png' },
    { value: 'jpg', viewValue: 'Jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
