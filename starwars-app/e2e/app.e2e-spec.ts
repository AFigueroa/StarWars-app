import { StarwarsAppPage } from './app.po';

describe('starwars-app App', () => {
  let page: StarwarsAppPage;

  beforeEach(() => {
    page = new StarwarsAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
