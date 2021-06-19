declare namespace Cypress {
  interface Chainable {
    /**
     * * Custom command to select DOM element from Storybook iframe.
     **@example cy.findInStory('input')
     */
    findInStory(selector: string): Chainable;
  }
}
