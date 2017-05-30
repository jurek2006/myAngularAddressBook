import { MyAngularAddressBookPage } from './app.po';

describe('my-angular-address-book App', () => {
  let page: MyAngularAddressBookPage;

  beforeEach(() => {
    page = new MyAngularAddressBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
