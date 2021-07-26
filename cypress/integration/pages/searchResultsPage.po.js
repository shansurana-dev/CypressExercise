const OOS_BUTTON = 'span[class^=oos]';
const ADD_TO_BASKET_BUTTON = '#button--add-to-basket';
const PRODUCT = '[data-test="product-image-container"] img';
const GO_TO_BASKET_BUTTON = '#basketLink';

export class SearchResultsPage {
  // Will display only the in-stock items
  static hideToggle() {
    cy.get(OOS_BUTTON).contains('Hide').click()
  }

  //Clicks on the first product and then click on Add To Basket
  static addToBasket() {
    cy.get(PRODUCT).first().click()
    cy.get(ADD_TO_BASKET_BUTTON).focus().should('be.enabled').click()
    return cy.contains('Go to your basket').then(($buttonElem) => {
      expect($buttonElem.text()).eq('Go to your basket')
    })
  }

  static goToBasketButton() {
    return cy.get(GO_TO_BASKET_BUTTON)
  }
}