import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from '@angular/router';
import { LoginComponent } from './+login';

@Component({
  moduleId: module.id,
  selector: 'sport-league-management-app',
  templateUrl: 'sport-league-management.component.html',
  styleUrls: ['sport-league-management.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]

})
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/Login', component: LoginComponent}
])
export class SportLeagueManagementAppComponent {
  title = 'ejempplo nery works!';
}
