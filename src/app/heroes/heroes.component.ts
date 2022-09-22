import { Component, OnInit } from '@angular/core';
import { Heroe } from './heroes';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title: string='Heroes';
  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
  }

}
