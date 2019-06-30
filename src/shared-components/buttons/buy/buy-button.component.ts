import {Component, TemplateRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})

export class BuyButtonComponent {
  public partyId: string;
  public currentPartyId: string;
  public hostess: string;
  public partyIds: any = {
    'default': '40026',
    '41651': 'Kaitlyn Lofthouse',
    '21479': 'Cindy Hansen',
    '16132': 'Karina Arshad',
    '22014': 'Megan Watkins',
    '14841': 'Tess Black',
    '14175': 'Clarissa Black',
    '6422': 'Shannon Moss',
    '21265': '12 Days of Maskcara',
    '35821': 'A Beautifuleigh YOU Party',
    '40026': 'June’s Mystery Hostess Party'
  };

  constructor(private modalService: NgbModal) {}

  updatePartyId(currentPartyId: any) {
    this.currentPartyId = currentPartyId;
    this.partyId = currentPartyId;
    if (currentPartyId in this.partyIds) {
      this.hostess = this.partyIds[currentPartyId];
    } else {
      this.partyId = this.partyIds['default'];
      this.hostess = null;
    }
  }

  /**
   * Open the modal
   * @param modal The Modal to be shown
   */
  open(modal: TemplateRef<any>) {
    this.partyId = this.partyIds['default'];
    this.updatePartyId(this.partyIds['default']);
    this.modalService.open(modal);
  }

  close() {
    this.modalService.dismissAll();
  }
}
