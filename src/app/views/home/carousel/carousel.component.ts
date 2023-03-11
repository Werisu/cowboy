import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items = [
    "Sanduíches",
    "Batata Frita",
    "Sucos",
    "Refrigerantes",
    "Combos",
    "Cremes 500ML",
    "Açaí na Tigela"
  ];

  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}

