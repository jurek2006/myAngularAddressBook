import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent implements OnInit {

	// obiekt zdarzenia przekazujący dane z formularza
	@Output() kontaktDodany = new EventEmitter<{
									nazwisko: string,
									imie: string,
									drugieImie: string,
									nrTelefonu: string,
									email: string
	}>();

	// pola powiązane z polami formularza
	nazwisko: string = '';
	imie: string = '';
	drugieImie: string = '';
	nrTelefonu: string = '';
	email: string = '';

  constructor() { }

  ngOnInit() {
  }

  onDodajKontakt(){
 	// metoda obsługująca kliknięcie "Dodaj kontakt"
 	// emitowanie eventu z przekazaniem danych 
 	this.kontaktDodany.emit({
 		nazwisko: 	this.nazwisko,
		imie: 		this.imie,
		drugieImie: 	this.drugieImie,
		nrTelefonu: 	this.nrTelefonu,
		email: 		this.email
 	});

 	console.log({
 		'nazwisko': 	this.nazwisko,
		'imie': 		this.imie,
		'drugieImie': 	this.drugieImie,
		'nrTelefonu': 	this.nrTelefonu,
		'email': 		this.email
 	});
  }
}
