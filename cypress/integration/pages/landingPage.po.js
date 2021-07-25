const LOGO = '.logo-logo--5b465';
const SEARCH_FIELD = '#mobileSearch';

export class LandingPage {
  static logo(){
    return cy.get(LOGO)
  }
  static searchField(){
    return cy.get(SEARCH_FIELD)
  }
  static acceptCookieBanner() {
    cy.get('button[data-test=allow-all]').click()
    }
  }

  // static pressSearch() {
  //   // cy.get(SEARCH_BUTTON).contains(SEARCH_TEXT)
  //   //   .click();
  //   cy.get(SEARCH_BUTTON).first().click();
  //   return new GoogleResultsPage();
  // }

  // static pressFeelLucky() {
  //   cy.get(FEEL_LUCKY_BUTTON).first().click();
  // }


// export default LandingPage;