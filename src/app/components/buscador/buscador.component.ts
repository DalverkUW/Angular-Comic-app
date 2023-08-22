import { ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/shared/services/heroe.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  nombre:string;
  index: number;
  heroe: Heroe;

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(paramsSUB =>{
      this.nombre = paramsSUB['nombre'];
      this.index = heroeService.buscarHeroe(this.nombre);
      if (this.index !== -1) {
        this.heroe = this.heroeService.getHeroe(this.index)
      }
    })
   }

  ngOnInit(): void {
  }

}
