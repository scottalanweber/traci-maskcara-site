import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public beforeAfterImages = [
    {url: 'assets/images/Before-After-TLW1.jpg', alt: 'Before-After-TLW1'},
    {url: 'assets/images/Before-After-AM.jpg', alt: 'Before-After-AM'},
    {url: 'assets/images/Before-After-CM.jpg', alt: 'Before-After-CM'},
    {url: 'assets/images/Before-After-TLW2.jpg', alt: 'Before-After-TLW2'},
    {url: 'assets/images/Before-After-JA.jpg', alt: 'Before-After-JA'},
    {url: 'assets/images/Before-After-JAl.jpg', alt: 'Before-After-JAl'},
    {url: 'assets/images/Before-After-KR.jpg', alt: 'Before-After-KR'},
    {url: 'assets/images/Before-After-TLW3.jpg', alt: 'Before-After-TLW3'},
    {url: 'assets/images/Before-After-LB.jpg', alt: 'Before-After-LB'},
    {url: 'assets/images/Before-After-MT.jpg', alt: 'Before-After-MT'},
    {url: 'assets/images/Before-After-SA.jpg', alt: 'Before-After-SA'},
    {url: 'assets/images/Before-After-SN.jpg', alt: 'Before-After-SN'},
    {url: 'assets/images/Before-After-VP.jpg', alt: 'Before-After-VP'},
  ];

  constructor() {}
}
