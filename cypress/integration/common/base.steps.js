import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import { LandingPage } from '../pages/landingPage.po';

Given(/^User is on the home page$/, () => {
  cy.visit('/',{
    onBeforeLoad: $window => {
      return new Cypress.Promise(resolve => {
        $window.addEventListener('loaded', () => {
            cy.get('data-aem-kit-hydrated').should('eq','true')
            $window.removeEventListener('loaded') // cleanup step
            cy.resolve()
        });
      });
    }
  });
  cy.wait(20000)
});

Given(/^User accepts the cookie banner$/, () => {
  LandingPage.acceptCookieBanner();  
  cy.wait(20000)
  return LandingPage.logo().invoke('attr','alt').should('eq','John Lewis & Partners Home')
});

