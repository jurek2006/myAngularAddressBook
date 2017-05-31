import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactElementComponent } from './contact-list/contact-element/contact-element.component';
import { ContactListPanelComponent } from './contact-list/contact-list-panel/contact-list-panel.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactElementComponent,
    ContactListPanelComponent,
    ContactDisplayComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
