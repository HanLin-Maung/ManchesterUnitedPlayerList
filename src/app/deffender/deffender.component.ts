import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-deffender',
  templateUrl: './deffender.component.html',
  styleUrls: ['./deffender.component.css']
})
export class DeffenderComponent implements OnInit{

  constructor (
    private heroService: HeroService,
  ) {}

  defenders = this.heroService.defenders

  ngOnInit(): void {
    
  }

}
