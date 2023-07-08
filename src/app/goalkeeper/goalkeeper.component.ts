import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-goalkeeper',
  templateUrl: './goalkeeper.component.html',
  styleUrls: ['./goalkeeper.component.css']
})
export class GoalkeeperComponent implements OnInit {

  constructor(
    private heroService: HeroService,
  ) { }

  goalkeepers = this.heroService.goalkeepers

  ngOnInit(): void {

  }
}


