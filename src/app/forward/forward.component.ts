import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.css']
})
export class ForwardComponent implements OnInit{

  constructor (
    private heroService: HeroService
  ) {}

  strikers = this.heroService.strikers


  ngOnInit(): void {
    
  }
}
