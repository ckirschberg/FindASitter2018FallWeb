import { browser, element, by, $$ } from "protractor";
import { AppPage } from "./app.po";

describe('Testing my Sitters page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  
  it('Add a new sitter sitters array', async() => {
    // 0: Login
    // 1: Navigate to sitters-list component
    // 2: Count number of sitters by selecting ui-components. (we call it a)
    // 3: Click navigation to go to the register component.
    // 4: Fill out fields to create a new sitter.
    // 5: Click save
    // 6: Click navigation to go to sitters-list again
    // 7: Count number of sitters (we call it b)
    // 8: Expect  (b-a) = 1
    
    page.login();  
    // browser.waitForAngular();
    $$('#btnFindSitter').click();

    // count elements 
    $$('.example-card').then(function(res) {
    // let res = await element.all(by.css('.example-card'));
    console.log(res.length);
      // elemsAfter will be a number specifying how many elements of .yourCssClassHere there are in the page.

      // Insert expect statements here..
      expect(true).toBeFalsy();
    // });
    
  });
});