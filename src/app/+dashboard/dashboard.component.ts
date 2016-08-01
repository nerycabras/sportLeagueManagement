import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  PlanetsService } from '../service';
import {  Planets } from '../model';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers:[PlanetsService]
})
export class DashboardComponent implements OnInit {
  planetsList: Planets[] = [];
  constructor(
    private _planetservice: PlanetsService,
    private _router: Router) {}

  ngOnInit() {
        this._planetservice.getPlanets().then(planets => this.planetsList = planets);
  }

}
