import { BudgetProPage } from './app.po';

describe('budget-pro App', () => {
  let page: BudgetProPage;

  beforeEach(() => {
    page = new BudgetProPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
