import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-stkinfo',
  templateUrl: './stkinfo.component.html',
  styleUrls: ['./stkinfo.component.css']
})
export class StkinfoComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private activateRoute: ActivatedRoute
  ) {}
  strikerId: any;
  striker: any;
  strikers = this.heroService.strikers

  ngOnInit(): void {
   this.strikerId = this.activateRoute.snapshot.paramMap.get('id');
   this.striker = this.strikers.find(i => i.id == this.strikerId); 
  }

}
