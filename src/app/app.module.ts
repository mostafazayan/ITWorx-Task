import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditClassComponent } from './components/add-edit-class/add-edit-class.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MainComponent, AddEditClassComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  entryComponents: [AddEditClassComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
