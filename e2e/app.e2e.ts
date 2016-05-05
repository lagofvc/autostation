import { AutostationPage } from './app.po';

describe('autostation App', function() {
  let page: AutostationPage;

  beforeEach(() => {
    page = new AutostationPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Automation Station');
  });
});
