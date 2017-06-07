import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-element',
  templateUrl: './contact-element.component.html',
  styleUrls: ['./contact-element.component.css']
})
export class ContactElementComponent implements OnInit {

	@Input() contactItem: Contact;

  constructor() { }

  ngOnInit() {
  }

}
