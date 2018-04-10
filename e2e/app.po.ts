import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  geth1Text() {
    return element(by.css('app-root h1')).getText();
  }
}
