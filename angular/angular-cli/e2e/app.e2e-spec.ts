import { AppPage } from './app.po';

describe('angular-cli App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Fernando Luigi Basilio!');
  });

  it('deve exibir o paragrafor com mensagem \'Mensagem inicial\'', () => {
    page.navigateTo();
    expect(page.getMessageText()).toEqual('Mensagem inicial');
  });

  it('deve exibir o paragrafor com mensagem \'Segunda mensagem\'', () => {
    page.navigateTo();
    page.changeMessage();
    expect(page.getMessageText()).toEqual('Segunda mensagem');
  });

});
