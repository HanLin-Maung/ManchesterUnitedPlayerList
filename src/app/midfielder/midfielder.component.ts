import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-midfielder',
  templateUrl: './midfielder.component.html',
  styleUrls: ['./midfielder.component.css']
})
export class MidfielderComponent implements OnInit {

  constructor (
    private heroService: HeroService,
  ) {}

  midfielders = this.heroService.midfielders



  ngOnInit(): void {
    
  }

}
