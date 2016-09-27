import { Ng2FinalFirebasePage } from './app.po';

describe('ng2-final-firebase App', function() {
  let page: Ng2FinalFirebasePage;

  beforeEach(() => {
    page = new Ng2FinalFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
