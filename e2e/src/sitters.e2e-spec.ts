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
    
    // browser.sleep(2000);
    page.login();  // 0
    // browser.sleep(5000);
    // browser.waitForAngular();
    $$('#btnFindSitter').click(); // 1

    // count elements 
    $$('.example-card').then(function(sittersBefore) {
    // let res = await element.all(by.css('.example-card'));
      let sittersCountBefore = sittersBefore.length;
      
      $$('#btnRegister').click(); // 3

      //4.
      $$('#firstname').sendKeys('Martin');
      $$('#lastname').sendKeys('Petersen');
      $$('#btnRegister').click(); // 5

      // page.login(); // reloads page!!!
      $$('#menuLogin').click();
      element(by.name('username')).sendKeys("rabbababab");
      element(by.name('password')).sendKeys("rabbababab");
      element(by.id('btnLogin')).click();
      $$('#btnFindSitter').click();

      $$('.example-card').then((sittersAfter) => {  // 7
        let sittersCountAfter = sittersAfter.length;
        // Insert expect statements here..
        // browser.sleep(3000);
        expect(sittersCountAfter - sittersCountBefore).toBe(1);
      });
    });
  });
});