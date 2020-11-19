import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from '../shared-components/header/header.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {BuyButtonComponent} from '../shared-components/buttons/buy/buy-button.component';
import {ColorMatchFormComponent} from '../shared-components/forms/color-match/color-match-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ColorMatchButtonComponent} from '../shared-components/buttons/color-match/color-match-button.component';
import {BecomeArtistButtonComponent} from '../shared-components/buttons/become-artist/become-artist-button.component';
import {MultiStepFormComponent} from '../shared-components/forms/multi-step-form/multi-step-form.component';
import {ServicesComponent} from '../pages/services/services.component';
import {HomeComponent} from '../pages/home/home.component';
import {AboutComponent} from '../pages/about/about.component';
import {SortPipe} from '../pipes/sort.pipe';
import {PartyDataService} from '../data/party-data.service';
import {GoogleSheetsClient} from '../clients/google.sheets.client';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BecomeArtistButtonComponent,
    BuyButtonComponent,
    ColorMatchButtonComponent,
    ColorMatchFormComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MultiStepFormComponent,
    ServicesComponent,
    SortPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    GoogleSheetsClient,
    PartyDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
