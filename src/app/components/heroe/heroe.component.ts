import { ActivatedRoute } from '@angular/router';
import { HeroeService } from './../../shared/services/heroe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  @Input()
  heroe: Heroe;

  constructor(public heroeService: HeroeService, public activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(paramSUB =>{
      this.heroe = this.heroeService.getHeroe(paramSUB['id'])
    })
   }

  ngOnInit(): void {
  }

}
