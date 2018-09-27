import { browser, element, by, $$ } from "protractor";
import { AppPage } from "./app.po";

describe('Testing my Sitters page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  
  it('1.0 Add a new sitter sitters array', async() => {
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
      
      $$('#menuRegister').click(); // 3

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
  
  it('1.1: Try creating a new user with valid data, should not save', () => {

  });

  it('2.0: Should update a users name', () => {
    // Navigate to find-a-sitter (login first)
    // Click edit button on the first sitter
    // Change the firstname and lastname (save to variables)
    // Click the save/edit button
    // Read the firstname and lastname (save to variables)
    // Expect name is different from before?
    // Expect name to be what we set it to be.
    
    $$('#menuPortal').click();
    
    $$('#btnFindSitter').click();
    $$('.e2e-btnEdit').first().click();
    $$('#firstname').getAttribute('value').then(function(textBefore) {
      console.log(textBefore);
      $$('#firstname').clear();
      $$('#firstname').sendKeys('Random text')
      $$('#btnEdit').click();
      
      $$('.e2e-btnEdit').first().click();
      $$('#firstname').getAttribute('value').then(function(textAfter) {
        console.log(textAfter);
        expect(textBefore !== textAfter).toBe(true);
      });
    });
    


    
  });

  it('2.1: Should not have changed data, if we do not edit the input boxes ', () => {

  });
});