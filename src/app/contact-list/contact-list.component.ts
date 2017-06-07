import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

	contacts:Contact[] = [
		new Contact("Dolas", "Franek", "Antoni", "123 456 789", "franek@dolas.pl"),
		new Contact("Brzęczyszczykiewicz", "Grzegorz", "", "134 3456 78", "brzecz@gmail.com")
	];

  // Emiter zdarzenia po kliknięciu na element listy
  @Output() itemClicked = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  onDodaj(){
  // metoda obsługująca zdarzenie kliknięcia przycisku dodaj
  	
  	// dodawanie testowych danych
  	this.contacts.push(new Contact("Skowron", "Jurek", "", "728 100 888", "jurek2@fgh.pl"));
  }

  onEdytuj(){
  // metoda obsługująca zdarzenie kliknięcia przycisku edytuj
  	console.log("Kliknięto Edytuj");
  }

  onUsun(){
  // metoda obsługująca zdarzenie kliknięcia przycisku usun
  	console.log("Kliknięto Usuń");
  }

  // metoda reagująca na wyemitowanie zdarzenia kontakt dodany
  onKontaktDodany(daneKontaktu: {
									nazwisko: string,
									imie: string,
									drugieImie: string,
									nrTelefonu: string,
									email: string})
  {
  	this.contacts.push(new Contact(daneKontaktu.nazwisko, daneKontaktu.imie, daneKontaktu.drugieImie, daneKontaktu.nrTelefonu, daneKontaktu.email));
  }

  listItemClicked(contact: Contact){
    // funkcja obsługi zdarzenia itemClicked emitowanego przez contact-element po kliknięciu na któryś z elementów listy kontaktów
    this.itemClicked.emit(contact);
  }
}
