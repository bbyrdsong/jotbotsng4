import { Jotbotsng4Page } from './app.po';

describe('jotbotsng4 App', () => {
  let page: Jotbotsng4Page;

  beforeEach(() => {
    page = new Jotbotsng4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
