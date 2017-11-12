import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  changeMessage() {
    element(by.css('button')).click();
  }

  getMessageText() {
    return element(by.css('app-root p')).getText();
  }

}
