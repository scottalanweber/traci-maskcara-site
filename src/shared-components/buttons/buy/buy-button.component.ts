import {Component, Input, TemplateRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PartyData} from '../../../model/party-data';
import {DEFAULT_PARTY_ID, PARTIES} from '../../../data/parties.data';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})

export class BuyButtonComponent {
  @Input() showPartyLink: boolean;

  public partyId: string;
  public currentPartyId: string = null;
  public hostess: string;
  public partyStatus: string;

  constructor(private modalService: NgbModal) {}

  updatePartyId(currentPartyId: any) {
    if (currentPartyId !== DEFAULT_PARTY_ID) {
      this.currentPartyId = currentPartyId;
    }

    this.partyId = currentPartyId;
    if (this.getParty(currentPartyId)) {
      this.hostess = this.getParty(currentPartyId).hostess;
      this.partyStatus = this.getParty(currentPartyId).status;
      if (this.partyStatus === 'closed') {
        this.partyId = DEFAULT_PARTY_ID;
      }
    } else {
      this.partyId = DEFAULT_PARTY_ID;
      this.hostess = null;
      this.partyStatus = null;
    }
  }

  getParties() {
    return PARTIES.filter(party => !party.rewards && party.status === 'open');
  }

  getDefaultParty() {
    return this.getParty(DEFAULT_PARTY_ID);
  }

  getCurrentParty(): PartyData {
    return this.getParty(this.currentPartyId);
  }

  getParty(partyId: string): PartyData {
    return PARTIES.find(party => party.id === partyId);
  }

  getSelectionText() {
    if (this.getCurrentParty().rewards) {
      return `You've entered a rewards program for ${this.getCurrentParty().hostess}.`;
    } else {
      return `You've entered a party hosted by ${this.getCurrentParty().hostess}.`;
    }
  }

  getErrorText() {
    if (this.getCurrentParty() && this.getCurrentParty().status === 'closed') {
      if (this.getCurrentParty().rewards) {
        return `This rewards program was for ${this.getCurrentParty().hostess}.
        However, it is now closed.
        You may still continue by clicking "Buy Now".`;
      } else {
        return `This party was hosted by ${this.getCurrentParty().hostess}.
        However, it is now closed.
        You may still continue by clicking "Buy Now".`;
      }
    } else {
      return `This is an unknown party/rewards number.
        If you believe this to be in error, please double check the number or contact Traci Weber.`;
    }
  }

  /**
   * Open the modal
   * @param modal The Modal to be shown
   */
  open(modal: TemplateRef<any>) {
    this.partyId = DEFAULT_PARTY_ID;
    this.updatePartyId(DEFAULT_PARTY_ID);
    this.modalService.open(modal);
  }

  close() {
    this.modalService.dismissAll();
    this.currentPartyId = null;
  }
}
