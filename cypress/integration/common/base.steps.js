import { Given } from 'cypress-cucumber-preprocessor/steps';
import { LandingPage } from '../pages/landingPage.po';

// Implemented step to check if app is hydrated after cy.visit()
Given(/^User is on the home page$/, () => {
  cy.visit('/', {
    onLoad: $window => {
      return new Cypress.Promise(resolve => {
        $window.addEventListener('loaded', () => {
          cy.get('data-aem-kit-hydrated').should('eq', 'true')
          $window.removeEventListener('loaded') // cleanup step
          cy.resolve()
        })
      })
    }
  })
})

//Validates whether the cookies are stored and welcome banner is displayed
Given(/^User accepts the cookie banner$/, () => {
  LandingPage.acceptCookieBanner();
  cy.getCookies().should('have.length', 1)
  return LandingPage.logo().invoke('attr', 'alt').should('eq', 'John Lewis & Partners Home')
})

