import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PartyData} from '../../../model/party-data';
import {PartyDataService} from '../../../data/party-data.service';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})

export class BuyButtonComponent implements OnInit {
  @Input() showPartyLink: boolean;

  public parties: PartyData[];
  public partyId: string;
  public currentPartyId: string = null;
  public defaultPartyId: string;
  public hostess: string;
  public partyStatus: string;

  constructor(private modalService: NgbModal,
              private partyDataService: PartyDataService) {}

  ngOnInit(): void {
    this.partyDataService.parties$.subscribe(partiesData => {
        if(partiesData) {
          this.parties = [];
          partiesData.forEach(party => {
            const partyData = new PartyData();
            partyData.id = party[0];
            partyData.hostess = party[1];
            partyData.status = party[2]?.toLowerCase();
            partyData.rewards = party[3]?.toLowerCase() === 'true';
            this.parties.push(partyData);
            if(party[4]?.toLowerCase() === 'default') {
              this.defaultPartyId = party[0];
            }
          });
        }
      });
  }

  updatePartyId(currentPartyId: any) {
    if (currentPartyId !== this.defaultPartyId) {
      this.currentPartyId = currentPartyId;
    }

    this.partyId = currentPartyId;
    if (this.getParty(currentPartyId)) {
      this.hostess = this.getParty(currentPartyId).hostess;
      this.partyStatus = this.getParty(currentPartyId).status;
      if (this.partyStatus === 'closed') {
        this.partyId = this.defaultPartyId;
      }
    } else {
      this.partyId = this.defaultPartyId;
      this.hostess = null;
      this.partyStatus = null;
    }
  }

  getParties(): PartyData[] {
    if (this.parties) {
      return this.parties.filter(party => !party.rewards && party.status === 'open');
    }
  }

  getCurrentParty(): PartyData {
    return this.getParty(this.currentPartyId);
  }

  getParty(partyId: string): PartyData {
    if (this.parties) {
      return this.parties.find(party => party.id === partyId);
    } else {
      return {
        id: '1234',
        hostess: 'test',
        status: 'closed',
        rewards: true
      };
    }
  }

  getSelectionText(): string {
    if (this.getCurrentParty().rewards) {
      return `You've entered a rewards program for ${this.getCurrentParty().hostess}.`;
    } else {
      return `You've entered a party hosted by ${this.getCurrentParty().hostess}.`;
    }
  }

  getErrorText(): string {
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
    this.partyId = this.defaultPartyId;
    this.updatePartyId(this.defaultPartyId);
    this.modalService.open(modal);
  }

  close() {
    this.modalService.dismissAll();
    this.currentPartyId = null;
  }
}
