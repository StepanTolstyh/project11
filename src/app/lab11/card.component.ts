import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cards, arr} from '../card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  Cards: Cards[] = [];
  constructor() {
    this.Cards = arr;
  }

  ngOnInit(): void {
  }


  delete(id_button) {
    for (let i = 0; i < this.Cards.length; i++) {
      if (this.Cards[i].idcr == id_button)
        this.Cards.splice(i, 1);
    }
  }
  add(Name, Color) {
    let status = Boolean(Math.round(Math.random()));
    if (this.Cards.length != 0) {
      Cards.id++;
    } else {
      Cards.id = 1;
    }
    this.Cards.push({ idcr: Cards.id, status: status, name: Name, color: Color })
  }
}