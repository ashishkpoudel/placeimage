import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImageFormat } from 'src/app/models/image-format';
import { ImageUrlGenerator } from 'src/app/services/image-url-generator';

@Component({
  selector: 'app-generate-image',
  templateUrl: './generate-image.component.html',
  styleUrls: ['./generate-image.component.css'],
  providers: [ImageUrlGenerator]
})
export class GenerateImageComponent implements OnInit {

  placeimage_url = 'sadasdi';

  image: Image = {
    width: 200,
    height: 200,
    format: 'jpg',
    text: ''
  };

  image_formats: ImageFormat[] = [
    { value: 'png', viewValue: 'png' },
    { value: 'jpg', viewValue: 'jpg' }
  ];

  constructor(private image_url_generator: ImageUrlGenerator) { }

  ngOnInit() {
    this.placeimage_url = this.image_url_generator.generate(this.image);
  }

  handleGenerate() {
    this.placeimage_url = this.image_url_generator.generate(this.image);
  }

}
