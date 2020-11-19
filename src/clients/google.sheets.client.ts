import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {PartiesData} from '../shared-components/buttons/buy/parties.data';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsClient {
  constructor(private httpClient: HttpClient) {
  }

  public getPartyData(): Observable<PartiesData> {
    const sheetId = '13g3V4S9eOhpcb8XAAnuzv2dwbA-83SosYM9VXkRUwa4';
    const range = 'A2:E3000';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}`;

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept',  'application/json');

    const object: any = {
      'key': 'AIzaSyCJ5k97639c6E8QXsozP6fcoAsjTG-dZGo'
    };

    const options: {} = {
      responseType: 'json',
      headers: headers,
      params: object
    };

    return this.httpClient.get<PartiesData>(url, options)
      .pipe(catchError(() => throwError('Something went wrong')));
  }
}
