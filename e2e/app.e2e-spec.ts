import { RumbosPage } from './app.po';

describe('rumbos App', function() {
  let page: RumbosPage;

  beforeEach(() => {
    page = new RumbosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
