import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from 'src/app/models/contact';
import { ImageFormat } from 'src/app/models/image-format';

@Injectable()
export class ContactService {
	constructor(private http_client: HttpClient){ }

	post(contact: Contact): Observable <ImageFormat> {
		return this.http_client.post <ImageFormat> ('http://localhost:8000/contact', contact, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		});
	}
}