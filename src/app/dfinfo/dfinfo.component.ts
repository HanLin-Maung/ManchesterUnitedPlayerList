import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dfinfo',
  templateUrl: './dfinfo.component.html',
  styleUrls: ['./dfinfo.component.css']
})
export class DfinfoComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
  ) { }

  defenderId: any;
  defender: any;
  defenders = this.heroService.defenders

  ngOnInit(): void {
    this.defenderId = this.activatedRoute.snapshot.paramMap.get('id');
    this.defender = this.defenders.find(d => d.id == this.defenderId);
  }

}
