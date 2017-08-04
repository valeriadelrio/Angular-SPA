import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})


export class HeroeComponent{

  casa: string;

  heroe:any  = {};

  constructor( private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params =>{
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  public getCasa():string{
    if(this.heroe.casa=="DC"){
      return "assets/img/dc.png";
    }
    else{
      return "assets/img/marvel.png";
    }
  }



}
