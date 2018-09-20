import { browser, element, by, $$ } from "protractor";
import { AppPage } from "./app.po";

describe('Testing my Sitters page', () => {
  let page: AppPage;
  
  beforeEach(() => {
    page = new AppPage();
  });
  
  it('Add a new sitter sitters array', async() => {
    page.login();  
    $$('#btnFindSitter').click();

    // count elements 
    $$('.example-card').then(function(res) {
    // let res = await element.all(by.css('.example-card'));
    console.log(res.length);
      // elemsAfter will be a number specifying how many elements of .yourCssClassHere there are in the page.


      expect(true).toBeFalsy();
    });
    
  });
});