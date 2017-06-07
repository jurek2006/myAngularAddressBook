import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

	// obiekt zdarzenia przekazujący dane z formularza
	// @Output() kontaktDodany = new EventEmitter<{
	// 								nazwisko: string,
	// 								imie: string,
	// 								drugieImie: string,
	// 								nrTelefonu: string,
	// 								email: string
	// }>();

	// // pola powiązane z polami formularza
	// nazwisko: string = '';
	// imie: string = '';
	// drugieImie: string = '';
	// nrTelefonu: string = '';
	// email: string = '';

  constructor() { }

  ngOnInit() {
  }

  // użycie lokalnych referencji w onDodajKontakt zamiast dwustronnego bindowania
  // onDodajKontakt(	nazwiskoInput: HTMLInputElement,
  // 					imieInput: HTMLInputElement,
  // 					drugieImieInput: HTMLInputElement,
  // 					nrTelefonuInput: HTMLInputElement,
  // 					emailInput: HTMLInputElement )
  // {
 	// // metoda obsługująca kliknięcie "Dodaj kontakt"
 	// // emitowanie eventu z przekazaniem danych z formularza
 	// this.kontaktDodany.emit({
 	// 	nazwisko: 		nazwiskoInput.value,
		// imie: 			imieInput.value,
		// drugieImie: 	drugieImieInput.value,
		// nrTelefonu: 	nrTelefonuInput.value,
		// email: 			emailInput.value
 	// });

  // }
}
