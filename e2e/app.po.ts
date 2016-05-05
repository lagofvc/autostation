export class AutostationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('autostation-app h1')).getText();
  }
}
