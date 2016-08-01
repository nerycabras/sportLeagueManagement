import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SportLeagueManagementAppComponent } from '../app/sport-league-management.component';

beforeEachProviders(() => [SportLeagueManagementAppComponent]);

describe('App: SportLeagueManagement', () => {
  it('should create the app',
      inject([SportLeagueManagementAppComponent], (app: SportLeagueManagementAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'sport-league-management works!\'',
      inject([SportLeagueManagementAppComponent], (app: SportLeagueManagementAppComponent) => {
    expect(app.title).toEqual('sport-league-management works!');
  }));
});
