# Cypress - Cucumber KPMG exercise

1. The test fails on 'Add To Basket' button as the button click operation also triggers Prevented Default event and sets it to 'true'. This happens on both hover operation button as well as on the product page. Possible reasons for this behavior are,
    A. After cy.visit calls the base URL, Cypress test is triggered before the app hydration gets completed. I have implemented   a solution to this on base.steps.js and commands.js
    B. There is some script (I think polyfill for web-vitals.js) that is not allowed to be rendered by Cypress. There is no solution to explicitly make Cypress wait for completion of all the scripts and listeners. This will need some more expertise to resolve.
2. Hover operation 'Add To Basket' button can be implemented using trigger('mouseover') or invoke('show') on the button.
3. The test isn't linked to any specific product. It selects the first product on the page.
4. Tests are very performative as Cypress does auto-waiting and re-tries, triggers requests directly on the network layer, native control of the web components and in-built smart asynchronous operations on the application
5. I have impleted Page object model for better business readability. Describe-It specs would have been simpler from creating the tests perpective.
6. I have implemented clearing and validating presence/absence of cookies.
