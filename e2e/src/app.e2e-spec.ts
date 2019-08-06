import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to NewTube!');
  });

  it('should display videos', () => {
    page.navigateToPath("/videos");
    browser.sleep(5000);
    expect(page.getVideoNameText()).toEqual('SampleVideo_1280x720_1mb.mp4');
  });

  it('should display comments', () => {
    page.navigateToPath("/videos/videoplayer/51");
    browser.sleep(5000);
    expect(page.getCommentText()).toEqual('"Comment from UI"');
  });

  it('should display upload video section', () => {
    page.navigateToPath("/addvideo");
    browser.sleep(5000);
    expect(page.getUploadText()).toEqual('Video title:');
  });

  it('should display login', () => {
    page.navigateToPath("/login");
    browser.sleep(5000);
    expect(page.getLoginText()).toEqual('Login');
  });

  it('should display create user', () => {
    page.navigateToPath("/signup");
    browser.sleep(5000);
    expect(page.getSignupText()).toEqual('Sign up');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
