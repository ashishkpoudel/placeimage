import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from 'src/app/models/contact';

@Injectable()
export class ContactService {
	constructor(private http_client: HttpClient){ }

	post(contact: Contact): Observable <Contact> {
		return this.http_client.post <Contact> ('http://localhost:8000/contact', contact, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		});
	}
}