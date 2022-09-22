import { Component, OnInit } from '@angular/core';
import { Villano } from './villanos';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {
  title: string= 'Villanos';
  villano: Villano = {
    id: 1,
    name: 'Darth Vader'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
