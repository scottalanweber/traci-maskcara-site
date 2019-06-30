import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-color-match-form',
  templateUrl: './color-match-form.component.html',
  styleUrls: ['./color-match-form.component.scss']
})

export class ColorMatchFormComponent implements OnInit {
  private googleFormsURL = 'https://script.google.com/macros/s/AKfycbyfKaDXjwfPUh8SQXpIKfdthalCp9uQbfIIqpnSW0auPG3TLA/exec';

  public defaultErrorMessage = 'There was a problem saving your request. Please contact support if this issue persists.';
  public colorMatchForm: FormGroup;
  public formSubmitSuccess = false;
  public formSubmitError = false;
  public requestingColorMatch = false;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.colorMatchForm = this.formBuilder.group({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl('', [Validators.required,
        Validators.pattern('^\\(?([2-9][0-8][0-9])\\)?[-.*]?([2-9][0-9]{2})[-.*]?([0-9]{4})$')])
    });
  }

  public submitForm(): void {
    this.requestingColorMatch = true;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept',  'application/json');

    const object: any = {
      'Name': this.colorMatchForm.get('Name').value,
      'Email': this.colorMatchForm.get('Email').value,
      'Phone': this.colorMatchForm.get('Phone').value
    };

    const options: {} = {
      responseType: 'json',
      headers: headers,
      params: object
    };

    this.httpClient.get<void>(this.googleFormsURL, options)
      .subscribe((res: any) => {
          if (res.result === 'success') {
            this.colorMatchForm.reset();
            this.formSubmitSuccess = true;
            this.requestingColorMatch = false;
          } else {
            this.formSubmitError = true;
            this.requestingColorMatch = false;
          }
        },
        (error) => {
          this.requestingColorMatch = false;
          this.formSubmitError = true;
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
