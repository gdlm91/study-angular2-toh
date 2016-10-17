import { StudyAngular2TohPage } from './app.po';

describe('study-angular2-toh App', function() {
  let page: StudyAngular2TohPage;

  beforeEach(() => {
    page = new StudyAngular2TohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
