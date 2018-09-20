import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  login() {
    browser.get('home/login');
    element(by.name('username')).sendKeys("rabbababab");
    element(by.name('password')).sendKeys("rabbababab");
    element(by.id('btnLogin')).click();
  }
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
