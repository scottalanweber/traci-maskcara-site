import {Component, HostListener, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({transform: 'translateY(-15%)'}),
        animate(400)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateY(-15%)'}))
      ])
    ])
  ]
})

export class HeaderComponent implements OnInit {
  constructor() {}

  private SMALL_SCREEN_MAX_WIDTH = 725;

  public innerWidth: any;
  public smallScreen: boolean;
  public showMenu: boolean;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.smallScreen = this.innerWidth < this.SMALL_SCREEN_MAX_WIDTH;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.smallScreen = this.innerWidth < this.SMALL_SCREEN_MAX_WIDTH;
  }

  public toggleCollapsedNav(): void {
    this.showMenu = !this.showMenu;
  }
}
