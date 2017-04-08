import { Chan4077.Github.IoPage } from './app.po';

describe('chan4077.github.io App', () => {
  let page: Chan4077.Github.IoPage;

  beforeEach(() => {
    page = new Chan4077.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
