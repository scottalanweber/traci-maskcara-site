import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public beforeAfterImages = [
    [
      {url: 'assets/images/Before-After-TLW1.webp', type: 'image/webp', alt: 'Before-After-TLW1'},
      {url: 'assets/images/Before-After-TLW1-400.webp', type: 'image/webp', alt: 'Before-After-TLW1'},
      {url: 'assets/images/Before-After-TLW1.jpg', type: 'image/jpeg', alt: 'Before-After-TLW1'},
      {url: 'assets/images/Before-After-TLW1-400.jpg', type: 'image/jpeg', alt: 'Before-After-TLW1'}
    ],
    [
      {url: 'assets/images/Before-After-AM.webp', type: 'image/webp', alt: 'Before-After-AM'},
      {url: 'assets/images/Before-After-AM-400.webp', type: 'image/webp', alt: 'Before-After-AM'},
      {url: 'assets/images/Before-After-AM.jpg', type: 'image/jpeg', alt: 'Before-After-AM'},
      {url: 'assets/images/Before-After-AM-400.jpg', type: 'image/jpeg', alt: 'Before-After-AM'}
    ],
    [
      {url: 'assets/images/Before-After-CM.webp', type: 'image/webp', alt: 'Before-After-CM'},
      {url: 'assets/images/Before-After-CM-400.webp', type: 'image/webp', alt: 'Before-After-CM'},
      {url: 'assets/images/Before-After-CM.jpg', type: 'image/jpeg', alt: 'Before-After-CM'},
      {url: 'assets/images/Before-After-CM-400.jpg', type: 'image/jpeg', alt: 'Before-After-CM'}
    ],
    [
      {url: 'assets/images/Before-After-TLW2.webp', type: 'image/webp', alt: 'Before-After-TLW2'},
      {url: 'assets/images/Before-After-TLW2-400.webp', type: 'image/webp', alt: 'Before-After-TLW2'},
      {url: 'assets/images/Before-After-TLW2.jpg', type: 'image/jpeg', alt: 'Before-After-TLW2'},
      {url: 'assets/images/Before-After-TLW2-400.jpg', type: 'image/jpeg', alt: 'Before-After-TLW2'}
    ],
    [
      {url: 'assets/images/Before-After-JA.webp', type: 'image/webp', alt: 'Before-After-JA'},
      {url: 'assets/images/Before-After-JA-400.webp', type: 'image/webp', alt: 'Before-After-JA'},
      {url: 'assets/images/Before-After-JA.jpg', type: 'image/jpeg', alt: 'Before-After-JA'},
      {url: 'assets/images/Before-After-JA-400.jpg', type: 'image/jpeg', alt: 'Before-After-JA'}
    ],
    [
      {url: 'assets/images/Before-After-JAl.webp', type: 'image/webp', alt: 'Before-After-JAl'},
      {url: 'assets/images/Before-After-JAl-400.webp', type: 'image/webp', alt: 'Before-After-JAl'},
      {url: 'assets/images/Before-After-JAl.jpg', type: 'image/jpeg', alt: 'Before-After-JAl'},
      {url: 'assets/images/Before-After-JAl-400.jpg', type: 'image/jpeg', alt: 'Before-After-JAl'}
    ],
    [
      {url: 'assets/images/Before-After-KR.webp', type: 'image/webp', alt: 'Before-After-KR'},
      {url: 'assets/images/Before-After-KR-400.webp', type: 'image/webp', alt: 'Before-After-KR'},
      {url: 'assets/images/Before-After-KR.jpg', type: 'image/jpeg', alt: 'Before-After-KR'},
      {url: 'assets/images/Before-After-KR-400.jpg', type: 'image/jpeg', alt: 'Before-After-KR'}
    ],
    [
      {url: 'assets/images/Before-After-TLW3.webp', type: 'image/webp', alt: 'Before-After-TLW3'},
      {url: 'assets/images/Before-After-TLW3-400.webp', type: 'image/webp', alt: 'Before-After-TLW3'},
      {url: 'assets/images/Before-After-TLW3.jpg', type: 'image/jpeg', alt: 'Before-After-TLW3'},
      {url: 'assets/images/Before-After-TLW3-400.jpg', type: 'image/jpeg', alt: 'Before-After-TLW3'}
    ],
    [
      {url: 'assets/images/Before-After-LB.webp', type: 'image/webp', alt: 'Before-After-LB'},
      {url: 'assets/images/Before-After-LB-400.webp', type: 'image/webp', alt: 'Before-After-LB'},
      {url: 'assets/images/Before-After-LB.jpg', type: 'image/jpeg', alt: 'Before-After-LB'},
      {url: 'assets/images/Before-After-LB-400.jpg', type: 'image/jpeg', alt: 'Before-After-LB'}
    ],
    [
      {url: 'assets/images/Before-After-MT.webp', type: 'image/webp', alt: 'Before-After-MT'},
      {url: 'assets/images/Before-After-MT-400.webp', type: 'image/webp', alt: 'Before-After-MT'},
      {url: 'assets/images/Before-After-MT.jpg', type: 'image/jpeg', alt: 'Before-After-MT'},
      {url: 'assets/images/Before-After-MT-400.jpg', type: 'image/jpeg', alt: 'Before-After-MT'}
    ],
    [
      {url: 'assets/images/Before-After-SA.webp', type: 'image/webp', alt: 'Before-After-SA'},
      {url: 'assets/images/Before-After-SA-400.webp', type: 'image/webp', alt: 'Before-After-SA'},
      {url: 'assets/images/Before-After-SA.jpg', type: 'image/jpeg', alt: 'Before-After-SA'},
      {url: 'assets/images/Before-After-SA-400.jpg', type: 'image/jpeg', alt: 'Before-After-SA'}
    ],
    [
      {url: 'assets/images/Before-After-SN.webp', type: 'image/webp', alt: 'Before-After-SN'},
      {url: 'assets/images/Before-After-SN-400.webp', type: 'image/webp', alt: 'Before-After-SN'},
      {url: 'assets/images/Before-After-SN.jpg', type: 'image/jpeg', alt: 'Before-After-SN'},
      {url: 'assets/images/Before-After-SN-400.jpg', type: 'image/jpeg', alt: 'Before-After-SN'}
    ],
    [
      {url: 'assets/images/Before-After-VP.webp', type: 'image/webp', alt: 'Before-After-VP'},
      {url: 'assets/images/Before-After-VP-400.webp', type: 'image/webp', alt: 'Before-After-VP'},
      {url: 'assets/images/Before-After-VP.jpg', type: 'image/jpeg', alt: 'Before-After-VP'},
      {url: 'assets/images/Before-After-VP-400.jpg', type: 'image/jpeg', alt: 'Before-After-VP'}
    ]
  ];

  constructor() {}
}
