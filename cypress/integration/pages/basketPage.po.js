const QUANTITY = '[name="item-quantity"]';
const BASKET_ERROR = '[class^="ItemQuantityIndicator_errorMessage"]';
const REMOVE_ITEM = '.remove-basket-item-form-button';
const BASKET_MESSAGE_DISPLAYED = '.u-centred'

export class BasketPage {  
  static selectQuantity(){
    return cy.get(QUANTITY).first()
  }
  // Returns if any error displayed due to in-stock quantity
  static qtyError(){
    return cy.get(BASKET_ERROR).first()
  }
  static removeProduct(){
    return cy.get(REMOVE_ITEM)
  }
  static removeProductMessage(){
    cy.get(BASKET_MESSAGE_DISPLAYED).then($messageElem =>{
    console.log('Basket Page displays: '+$messageElem.text())  
    return expect($messageElem.text()).eq('Your basket is empty.')
    })
  }
}