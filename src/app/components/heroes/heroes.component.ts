import { HeroeService } from './../../shared/services/heroe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(public heroeService: HeroeService, public router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroeService.getHeroes()
  }

}
