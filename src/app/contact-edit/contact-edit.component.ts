import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Contact } from "../contact-list/contact.model";


@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

	// wybrany na liście element
	@Input('selectedItem') contact: Contact; 

  constructor() { }

  ngOnInit() {
  }

  // metoda zapisu nowych wartości z formularza do edytowanego kontaktu
  onZapiszKontakt(	nazwiskoInput: HTMLInputElement,
  					imieInput: HTMLInputElement,
  					drugieImieInput: HTMLInputElement,
  					nrTelefonuInput: HTMLInputElement,
  					emailInput: HTMLInputElement){
  	this.contact.nazwisko 	= nazwiskoInput.value; 
  	this.contact.imie 		= imieInput.value;
  	this.contact.drugieImie = drugieImieInput.value;
  	this.contact.nrTelefonu = nrTelefonuInput.value
  	this.contact.email 		= emailInput.value;
  	console.log(this.contact);
  }
}
