import { Component, Input } from '@angular/core';
import { Hamburguere } from 'src/app/models/cardapio';

@Component({
  selector: 'app-card-type-a',
  templateUrl: './card-type-a.component.html',
  styleUrls: ['./card-type-a.component.css']
})
export class CardTypeAComponent {

  @Input() item!: Hamburguere;

}
