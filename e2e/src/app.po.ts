import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToPath(path:string) {
    return browser.get(browser.baseUrl+path) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }

  getVideoNameText() {
    return element(by.css('app-root app-video-list tr td:nth-child(2)')).getText() as Promise<string>;
  }

  getCommentText() {
    return element(by.css('app-root app-comments div:nth-child(2) tr td:nth-child(2)')).getText() as Promise<string>;
  }

  getUploadText() {
    return element(by.css('app-root app-upload h4')).getText() as Promise<string>;
  }

  getLoginText() {
    return element(by.css('app-root app-user-login h1')).getText() as Promise<string>;
  }

  getSignupText() {
    return element(by.css('app-root app-user h1')).getText() as Promise<string>;
  }
}
