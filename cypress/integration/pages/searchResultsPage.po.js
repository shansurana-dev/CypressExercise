const OOS_BUTTON = 'span[class^=oos]';
const ADD_TO_BASKET_BUTTON = '#button--add-to-basket';
const PRODUCT = '[data-test="product-image-container"] img';
//const GO_TO_BASKET_BUTTON = '#basketLink';

export class SearchResultsPage {

  static hideToggle() {
    cy.get(OOS_BUTTON).contains('Hide').click()
    }

    //Hover over the first product and then click on Add To Basket
    static addToBasket() {           
      cy.get(PRODUCT).first().click()
      cy.wait(20000)
      cy.get(ADD_TO_BASKET_BUTTON).focus().should('be.enabled').click()
      //       .click((event) => {
      // //   //$button.on('click', e => {
      //     //event.preventDefault()
      //       event.returnValue = false
      // //  //})
      // })
      //cy.scrollTo('center')
      return cy.contains('Go to your basket').then(($buttonElem)=>{
        expect($buttonElem.text()).eq('Go to your basket')
      })
      }
      static goToBasketButton() {
        return cy.contains('Go to your basket')
          }
        }
  // static expect() {
  //   return {
  //     toHaveResults: () => {
  //       cy.get(RESULT_LINK).its('length').then((length) => {
  //         expect(length).to.be.greaterThan(5);
  //       });
  //     },
  //   };
  // }
