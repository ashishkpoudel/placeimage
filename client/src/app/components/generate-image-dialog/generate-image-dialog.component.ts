import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/Image';
import { ImageFormat } from '../../models/ImageFormat';
import { ImageUrlGenerator } from '../../services/ImageUrlGenerator';

@Component({
  selector: 'app-generate-image-dialog',
  templateUrl: './generate-image-dialog.component.html',
  styleUrls: ['./generate-image-dialog.component.css'],
  providers: [ImageUrlGenerator]
})
export class GenerateImageDialogComponent implements OnInit {

  image_url = '';

  image: Image = {
    width: 200,
    height: 200,
    format: 'jpg',
    font_size: 16
  };

  image_formats: ImageFormat[] = [
    { value: 'png', viewValue: 'png' },
    { value: 'jpg', viewValue: 'jpg' }
  ];

  constructor(private image_url_generator: ImageUrlGenerator) { }

  ngOnInit() {
  }

  handleCreate() {
    let image_url = this.image_url_generator.generate(this.image);
    alert(image_url);
  }

}
