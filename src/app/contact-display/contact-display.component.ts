import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Contact } from '../contact-list/contact.model';


@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent implements OnInit {

	@Input() contact: Contact; 
	// emiter emitowany gdy użytkownik kliknie przycisk "Edytuj"
	@Output() edytujClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onEdytuj(){
  // metoda obsługująca zdarzenie kliknięcia przycisku edytuj
  	this.edytujClicked.emit();
  }

}
