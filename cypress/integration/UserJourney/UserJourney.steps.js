import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import {LandingPage} from '../pages/landingPage.po';
import {SearchResultsPage} from '../pages/searchResultsPage.po';
import {BasketPage} from '../pages/basketPage.po';


When('I search for {string}', (searchProduct) => {
LandingPage.searchField().clear().click().type(searchProduct).type('{enter}');
cy.wait(20000)
return cy.url().should('include','search?search-term=')
})

When('Select In-Stock products', () => {
  SearchResultsPage.hideToggle() 
  cy.wait(20000)
  return cy.url().should('include','/search/show-in-stock-items-only/')
  })

When('Add the first product to the basket', () => {
  return SearchResultsPage.addToBasket()   
  })
  
When('Traverse to the Basket', () => {
  SearchResultsPage.goToBasketButton().click()
  return cy.url().should('include','/basket')
  })

  When('Increment quantity of the product to {string}', (qty) => {
    BasketPage.selectQuantity().click().clear().type(qty).type('{enter}')
    return BasketPage.qtyError().should('not.exist')
    });  


