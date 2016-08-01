import { SportLeagueManagementPage } from './app.po';

describe('sport-league-management App', function() {
  let page: SportLeagueManagementPage;

  beforeEach(() => {
    page = new SportLeagueManagementPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sport-league-management works!');
  });
});
