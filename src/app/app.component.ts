import { Component, ViewChild, ElementRef } from '@angular/core';
import { Cards as Cards, arr } from './card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';

  Card: Cards[];

  constructor() {
    Cards.id = 0;
    for (let i = 0; i < 10; i++) {
      var color;
      let status = Boolean(Math.round(Math.random()));
      if (status === true) {
        color = "rgb(0, 255, 0)"
      } else {
        color = "rgb(255, 0, 0)"
      }
      var ArrNames = [ " Андрей", " Женя"," Санечка"," Станислав Игоревич"," Майкл Джордан"," дворовый кот Барбосс"," Абхазия"," томатная паста"];
      var imya = Math.floor(Math.random() * ArrNames.length);
      Cards.id++;
      arr.push({ idcr: Cards.id, status: status, name: (ArrNames[imya]), color: color });

    }
  }
}
