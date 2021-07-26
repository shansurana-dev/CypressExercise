import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { LandingPage } from '../pages/landingPage.po';
import { SearchResultsPage } from '../pages/searchResultsPage.po';
import { BasketPage } from '../pages/basketPage.po';


When('I search for {string}', (searchProduct) => {
  LandingPage.searchField().clear().click().type(searchProduct).type('{enter}');
  return cy.url().should('include', 'search?search-term=')
})

When('Select In-Stock products', () => {
  SearchResultsPage.hideToggle()
  return cy.url().should('include', '/search/show-in-stock-items-only/')
})

When('Add the first product to the basket', () => {
  return SearchResultsPage.addToBasket()
})

When('Traverse to the Basket', () => {
  SearchResultsPage.goToBasketButton().click()
  return cy.url().should('include', '/basket')
})
//Validates whether the quantity of product ordered does not exceed in-stock
When('Increment quantity of the product to {string}', (qty) => {
  BasketPage.selectQuantity().click().clear().type(qty).type('{enter}')
  return BasketPage.qtyError().should('not.exist')
});

When('Delete the item and quantities', () => {
  return BasketPage.removeProduct.click()
});

//Validates whether the basket is empty and cookies are cleared
Then('Basket is Empty', () => {
  BasketPage.removeProductMessage()
  cy.clearCookies()
  return cy.getCookies().should('be.empty')
});