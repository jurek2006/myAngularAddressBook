import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-element',
  templateUrl: './contact-element.component.html',
  styleUrls: ['./contact-element.component.css']
})
export class ContactElementComponent implements OnInit {

	@Input() contactItem: Contact;
	@Output() itemClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  contactItemClicked(){
  	this.itemClicked.emit();
  };

}
