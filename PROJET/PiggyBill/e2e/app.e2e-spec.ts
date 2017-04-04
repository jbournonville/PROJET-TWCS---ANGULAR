import { PiggyBillPage } from './app.po';

describe('piggy-bill App', () => {
  let page: PiggyBillPage;

  beforeEach(() => {
    page = new PiggyBillPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
