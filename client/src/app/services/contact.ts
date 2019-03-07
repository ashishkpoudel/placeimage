import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Contact } from 'src/app/models/contact';

@Injectable()
export class ContactService {
	constructor(private http_client: HttpClient){ }

	post(contact: Contact): Observable<Contact> {
		return this.http_client.post('http://localhost:8000/contact', contact, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		}).pipe(
			tap(_ => console.log('fetched contact')),
			catchError((error) => this.handleError(error))
		);
	}

	private handleError(errorResponse: HttpErrorResponse) {
		if (errorResponse.error instanceof ErrorEvent) {
			console.log('Client side error: ', errorResponse.error.message);
		} else {
			console.log('Server side error: ', errorResponse);
		}

		return new throwError('There is a problem with the service');
	}
}