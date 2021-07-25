const QUANTITY = '[name="item-quantity"]';
const BASKET_ERROR = '[class^="ItemQuantityIndicator_errorMessage"]';

export class BasketPage {

  static selectQuantity(){
    return cy.get(QUANTITY).first()
  }

  static qtyError(){
    return cy.get(BASKET_ERROR).first()
  }

}