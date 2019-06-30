import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor() {}

  @ViewChild('collapsedNav')
  public collapsedNav: ElementRef;

  public showMenu: boolean;

  public toggleCollapsedNav(): void {
    this.showMenu = !this.showMenu;

    if (this.showMenu) {
      this.collapsedNav.nativeElement.setAttribute('style', 'width: 250px;');
    } else {
      this.collapsedNav.nativeElement.setAttribute('style', 'width: 0;');
    }
  }
}
