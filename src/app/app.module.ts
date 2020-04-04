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
import {ColorMatchFormComponent} from '../shared-components/forms/color-match/color-match.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ColorMatchButtonComponent} from '../shared-components/buttons/color-match/color-match-button.component';
import {BecomeArtistButtonComponent} from '../shared-components/buttons/become-artist/become-artist-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BecomeArtistButtonComponent,
    BuyButtonComponent,
    ColorMatchButtonComponent,
    ColorMatchFormComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
