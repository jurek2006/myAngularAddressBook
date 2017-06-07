import { Component } from '@angular/core';

import { Contact } from './contact-list/contact.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  selectedContact: Contact; //właściwość przechowująca aktualnie wybrany na liście kontakt 

  contactItemClicked(contactElement: Contact){
  	// metoda obsługi zdarzenia itemClicked emitowanego przez contact-list 
  	// (wywoływanego gdy następuje kliknięcie na którymś elemencie listy kontaktów - przekazywany jest ten kontakt )
  	// console.log(contactElement);
  	this.selectedContact = contactElement;
  }
}
