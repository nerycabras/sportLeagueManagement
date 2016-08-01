export class SportLeagueManagementPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sport-league-management-app h1')).getText();
  }
}
