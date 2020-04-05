import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {FormSteps} from './color-match-form.config';

@Component({
  selector: 'app-color-match-form',
  templateUrl: './color-match-form.component.html',
  styleUrls: ['./color-match-form.component.scss']
})

export class ColorMatchFormComponent implements OnInit {
  formContent: any;
  formData: any;
  formStatus: boolean;

  private googleFormsURL = 'https://script.google.com/macros/s/AKfycbyfKaDXjwfPUh8SQXpIKfdthalCp9uQbfIIqpnSW0auPG3TLA/exec';

  public defaultErrorMessage = 'There was a problem saving your request. Please contact support if this issue persists.';
  public formSubmitSuccess = false;
  public formSubmitError = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.formContent = FormSteps;
    this.formData = {};
  }

  public submitForm(formData: any): void {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept',  'application/json');

    const object: any = {
      'Name': formData.name,
      'Email': formData.email,
      'Phone': formData.phone,
      'Current Makeup': formData.currentMakeup,
      'Makeup Struggles': formData.makeupStruggle,
      'Skin Type': formData.skinType,
      'Skin Care Satisfaction': formData.skinCareSatisfied
    };

    const options: {} = {
      responseType: 'json',
      headers: headers,
      params: object
    };

    this.httpClient.get<void>(this.googleFormsURL, options)
      .subscribe((res: any) => {
          if (res.result === 'success') {
            this.formSubmitSuccess = true;
            this.formStatus = true;
          } else {
            this.formSubmitError = true;
            this.formStatus = false;
          }
        },
        (error) => {
          this.formSubmitError = true;
          this.formStatus = false;
          this.handleError(error);
        }
      );
  }

  /**
   * Handle the error thrown by the Observable
   * @param e error thrown
   */
  private handleError(e): Observable<never> {
    return throwError(e.body.error || this.defaultErrorMessage);
  }
}
