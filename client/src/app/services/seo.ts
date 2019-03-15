import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class SEOService {
	constructor(private meta: Meta) { 
		// this.meta.addTag({name: 'description', content: 'easy to use image placeholder online'});
	}
}