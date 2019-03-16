import { Image } from 'src/app/models/image';

export class ImageUrlGenerator {

    generate(image: Image): string {

    	let url = 'https://use.placeimage.app/' 
    		+ image.width 
    		+ 'x' 
    		+ image.height 
    		+ '.' 
    		+ image.format;

    	if (image.text) {
    		url = url + '&text=' + image.text;
    	}

        return url;
    }
}