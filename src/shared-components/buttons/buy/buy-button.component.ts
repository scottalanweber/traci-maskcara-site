import {Component, Input, TemplateRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})

export class BuyButtonComponent {
  @Input() showPartyLink: boolean;

  public partyId: string;
  public currentPartyId: string;
  public hostess: string;
  public partyStatus: string;
  public partyData: any = {
    'default': '60612',
    '41651': {id: '41651', hostess: 'Kaitlyn Lofthouse', status: 'open'},
    '21479': {id: '21479', hostess: 'Cindy Hansen', status: 'open'},
    '16132': {id: '16132', hostess: 'Karina Arshad', status: 'open'},
    '22014': {id: '22014', hostess: 'Megan Watkins', status: 'open'},
    '14841': {id: '14841', hostess: 'Tess Black', status: 'open'},
    '14175': {id: '14175', hostess: 'Clarissa Black', status: 'open'},
    '6422': {id: '6422', hostess: 'Shannon Moss', status: 'open'},
    '21265': {id: '21265', hostess: '12 Days of Maskcara', status: 'closed'},
    '35821': {id: '35821', hostess: 'A Beautifuleigh YOU Party', status: 'closed'},
    '40026': {id: '40026', hostess: 'June’s Mystery Hostess', status: 'closed'},
    '22012': {id: '22012', hostess: 'Traci Carnette', status: 'closed'},
    '18906': {id: '18906', hostess: 'Stephanie Dunham', status: 'closed'},
    '17876': {id: '17876', hostess: 'Traci Weber', status: 'closed'},
    '14254': {id: '14254', hostess: 'Michelle Williams', status: 'closed'},
    '13222': {id: '13222', hostess: 'Corinne Thomas', status: 'closed'},
    '13013': {id: '13013', hostess: 'Traci Weber', status: 'closed'},
    '10505': {id: '10505', hostess: 'Connie Weber', status: 'closed'},
    '5190': {id: '5190', hostess: 'Corinne Thomas', status: 'closed'},
    '2262': {id: '2262', hostess: 'Traci Weber', status: 'closed'},
    '2261': {id: '2261', hostess: 'Traci Weber', status: 'closed'},
    '43385': {id: '43385', hostess: 'Amanda Nilsson', status: 'open'},
    '43574': {id: '43574', hostess: 'Heather Stevens', status: 'open'},
    '44662': {id: '44662', hostess: 'Sarah Moffat', status: 'open'},
    '44663': {id: '44663', hostess: 'Traci Weber', status: 'closed'},
    '45823': {id: '45823', hostess: 'Katie Rogers', status: 'open'},
    '52418': {id: '52418', hostess: 'Stephanie Dunham', status: 'open'},
    '58666': {id: '58666', hostess: 'Kayla Thueson', status: 'open'},
    '59101': {id: '59101', hostess: 'Jessica', status: 'open'},
    '59491': {id: '59491', hostess: 'Heather', status: 'open'},
    '60612': {id: '60612', hostess: 'Beautifuleigh YOU', status: 'open'},
    '61916': {id: '61916', hostess: 'Melissa Tolley', status: 'open'},
    '74200': {id: '74200', hostess: 'Lynette Baird', status: 'open'},
    '76224': {id: '76224', hostess: 'Kelly Armstrong', status: 'open'},
    '76444': {id: '76444', hostess: 'Maggie Moore', status: 'open'}
  };

  constructor(private modalService: NgbModal) {}

  updatePartyId(currentPartyId: any) {
    if (currentPartyId !== this.partyData['default']) {
      this.currentPartyId = currentPartyId;
    }

    this.partyId = currentPartyId;
    if (currentPartyId in this.partyData) {
      this.hostess = this.partyData[currentPartyId].hostess;
      this.partyStatus = this.partyData[currentPartyId].status;
      if (this.partyStatus === 'closed') {
        this.partyId = this.partyData['default'];
      }
    } else {
      this.partyId = this.partyData['default'];
      this.hostess = null;
      this.partyStatus = null;
    }
  }

  /**
   * Open the modal
   * @param modal The Modal to be shown
   */
  open(modal: TemplateRef<any>) {
    this.partyId = this.partyData['default'];
    this.updatePartyId(this.partyData['default']);
    this.modalService.open(modal);
  }

  close() {
    this.modalService.dismissAll();
  }
}
