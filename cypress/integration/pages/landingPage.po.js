const LOGO = '.logo-logo--5b465';
const SEARCH_FIELD = '#mobileSearch';

export class LandingPage {
  //returns the home page logo
  static logo() {
    return cy.get(LOGO)
  }
  //Returns the search text field
  static searchField() {
    return cy.get(SEARCH_FIELD)
  }
  
  static acceptCookieBanner() {
    cy.get('button[data-test=allow-all]').click()
  }
}