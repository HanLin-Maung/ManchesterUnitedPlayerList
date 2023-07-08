import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-mdinfo',
  templateUrl: './mdinfo.component.html',
  styleUrls: ['./mdinfo.component.css']
})
export class MdinfoComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private activateRoute: ActivatedRoute
  ) {}

  midfielderId: any;
  midfielder: any;
  midfielders = this.heroService.midfielders

  ngOnInit(): void {
    this.midfielderId = this.activateRoute.snapshot.paramMap.get('id');
    this.midfielder = this.midfielders.find(m => m.id == this.midfielderId)
    
  }

}
