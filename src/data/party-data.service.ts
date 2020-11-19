import {BehaviorSubject, Observable, of} from 'rxjs';
import {PartiesData} from '../shared-components/buttons/buy/parties.data';
import {GoogleSheetsClient} from '../clients/google.sheets.client';
import {flatMap, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class PartyDataService {
  private _partyData: BehaviorSubject<PartiesData>;
  private _parties: BehaviorSubject<string[][]>;

  parties$: Observable<string[][]>;
  partyData$: Observable<PartiesData>; // Observable of advance care plan for components to subscribe to

  constructor(private googleSheetsClient: GoogleSheetsClient) {
    this._partyData = new BehaviorSubject<PartiesData>(null);
    this.partyData$ = this._partyData.asObservable();

    this._parties = new BehaviorSubject<string[][]>(null);
    this.parties$ = this._parties.asObservable();
  }

  /**
   * Get the advance care plans for the currently authenticated user
   */
  fetchParties(): void {
    this.partyData$.pipe(
      take(1),
      flatMap(partyData => {
        return partyData
          ? of(partyData)
          : this.googleSheetsClient.getPartyData();
      })
    ).subscribe((partyData: PartiesData) => {
      this._partyData.next(partyData);
      this._parties.next(partyData.values)
    }, error => {
      console.log('An error occurred while fetching parties', error);
    });
  }
}
