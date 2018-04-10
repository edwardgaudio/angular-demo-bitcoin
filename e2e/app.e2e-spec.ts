import { AppPage } from './app.po';

describe('Intelligent Information Managment App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.geth1Text()).toEqual('[document list]');
  });
});
