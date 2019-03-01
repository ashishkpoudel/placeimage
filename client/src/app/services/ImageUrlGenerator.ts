import { Image } from '../models/Image';

export class ImageUrlGenerator {

    generate(image: Image): string {
        let base_url = 'https://placeimage.app';

        if (image.width) {
            base_url += image.width;
        }

        return base_url;
    }
}