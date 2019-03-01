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

  image_option = {
    width: 200,
    height: 200,
    format: 'jpg',
    font_size: 16
  };

  image_formats: ImageFormat[] = [
    { value: 'png', viewValue: 'png' },
    { value: 'jpg', viewValue: 'jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
