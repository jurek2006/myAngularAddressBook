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
  inEditMode: boolean = false; //właściwość określająca, czy aplikacja jest w trybie edycji kontaktu

  contactItemClicked(contactElement: Contact){
  	// metoda obsługi zdarzenia itemClicked emitowanego przez contact-list 
  	// (wywoływanego gdy następuje kliknięcie na którymś elemencie listy kontaktów - przekazywany jest ten kontakt )
  	this.selectedContact = contactElement;
  }

  onEdytujClicked(){
  // metoda obsługi zdarzenia edytujClicked emitowanego przez contact-display.component
  // (emitowanego gdy użytkownik kliknie przycisk "Edytuj")
  // przełącza aplikację w tryb EditMode
  	this.inEditMode = true;
  }
}
