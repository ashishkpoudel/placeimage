import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact';

import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  contact: Contact = new Contact();

  contact_form = this.form_builder.group({
    first_name : ['', Validators.required],
    last_name : ['', Validators.required],
    email : ['', Validators.required],
    message : ['', Validators.required]
  });

  constructor(
    private form_builder: FormBuilder,
    private contact_service: ContactService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    let contact = new Contact();
    contact.first_name = this.contact_form.get('first_name').value;
    contact.last_name = this.contact_form.get('last_name').value;
    contact.email = this.contact_form.get('email').value;
    contact.message = this.contact_form.get('message').value;

    this.contact_service.post(contact).subscribe(response => {
      let contact: Contact = response;
      console.log(contact);
      alert(contact.first_name);
    });
  }

}
