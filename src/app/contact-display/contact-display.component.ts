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

  // użycie lokalnych referencji w onDodajKontakt zamiast dwustronnego bindowania
  onDodajKontakt(	nazwiskoInput: HTMLInputElement,
  					imieInput: HTMLInputElement,
  					drugieImieInput: HTMLInputElement,
  					nrTelefonuInput: HTMLInputElement,
  					emailInput: HTMLInputElement )
  {
 	// metoda obsługująca kliknięcie "Dodaj kontakt"
 	// emitowanie eventu z przekazaniem danych z formularza
 	this.kontaktDodany.emit({
 		nazwisko: 		nazwiskoInput.value,
		imie: 			imieInput.value,
		drugieImie: 	drugieImieInput.value,
		nrTelefonu: 	nrTelefonuInput.value,
		email: 			emailInput.value
 	});

  }
}
