import { JiraAppPage } from './app.po';

describe('jira-app App', () => {
  let page: JiraAppPage;

  beforeEach(() => {
    page = new JiraAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
