/// <reference types="../support/types"/>

// Reference: https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
Cypress.Commands.add("findInStory", (selector: string) => {
  return cy
    .get("#storybook-preview-iframe", { log: false })
    .its("0.contentDocument.body", { log: false })
    .then((body) => cy.wrap(body, { log: false }))
    .find(selector);
});
