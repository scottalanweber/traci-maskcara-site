import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PartyDataService} from '../data/party-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  public title = 'traci-maskcara-site';

  constructor(private router: Router,
              private partyDataService: PartyDataService) {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }

  ngOnInit(): void {
    this.partyDataService.fetchParties();
  }
}
