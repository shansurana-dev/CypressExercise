Feature: User journey on the basket page

  @temp
  Scenario: Check that a product can be added or removed from the basket

    Given User is on the home page
    And User accepts the cookie banner
    When I search for "Computers and Toys"
    And Select In-Stock products
    And Add the first product to the basket
    #And Traverse to the Basket
    #And Increment quantity of the product to '5'
    # And Delete the item and quantities
    # Then Basket is Empty