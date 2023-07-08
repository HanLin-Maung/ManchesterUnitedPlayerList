import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-gkinfo',
  templateUrl: './gkinfo.component.html',
  styleUrls: ['./gkinfo.component.css']
})
export class GkinfoComponent implements OnInit {

  constructor(
    private heroService :HeroService,
    private activatedRoute: ActivatedRoute
  ) { }

  keeperID: any;
  keeper: any;
  goalkeepers = this.heroService.goalkeepers




  ngOnInit(): void {
    this.keeperID = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.keeper = this.goalkeepers.find(x => x.id == this.keeperID);
  }

}
