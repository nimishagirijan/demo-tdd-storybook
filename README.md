# demo-storybook-tddRepository with examples of how to do TDD and testing components in Storybook
## Tech Stack  
- [TypeScript](https://www.typescriptlang.org/)  
- [React](https://reactjs.org/) 
- [Cypress](https://www.cypress.io/)  
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)  
- [Jest Testing Framework](https://jestjs.io/) 
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)


## Getting Started

### Pre-requisites:
* Node
* NPM
* Yarn package manager
 For instruction on how to install, please click [here](https://itsromiljain.medium.com/the-best-way-to-install-node-js-npm-and-yarn-on-mac-osx-4d8a8544987a)
 
### Build and test locally
In the project directory, you can run:
```sh
# Install packages
yarn
# Builds the app for production to the `build` folder
yarn build
# Run unit tests in the interactive watch mode
yarn test
# Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
yarn start
```
## Storybook
Storybook is a UI component explorer that we use for developing and designing components in an isolated environment.
To *run* locally, run `yarn storybook` and open http://localhost:6006/
To *add* your component to Storybook, add to the `src/stories` as needed.

## Run UI Journey tests (Cypress tests)
`We use Cypress for journey tests which uses Storybook to load the component.
To *run* locally without the UI:
```
[terminal 1] yarn storybook
[terminal 2] yarn cy:run
```
## What is covered
### Introduction 
### What is TDD
Test first approach which helps me develop better software with cleaner code.
### How TDD helped me learn technology better
States a simple thing - start small.
For example:
Create a button
1. Write a test to see if the button exists
2. Once the test fails, create a button
3. Write another test to display warning on click of a button
4. Once the test fails, add a function to display a warning

## Lets start simple
### Unit tests
Lets do the following tasks:
1. Create a button with background color as blue
2. On the button click, let us display an warning message
3. 
### Storybook - to provide a playground
Storybook is a tool for UI development. It makes development faster and easier by isolating components. 
This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

For more on Storybook, click [here](https://storybook.js.org/docs/react/get-started/introduction)

### Lets talk about Cypress
Cypress helps create a great experience while you write end to end tests for your web applications. 
It tests anything that runs in a web browser. There is no need to install 10 separate tools and libraries to get your test suite set up.

For more on Cypress, click [here](https://www.cypress.io/how-it-works)

### Lets start simple Lets do the following tasks for a cypress test:
1. Use an input form with a label, inputfield and a button
2. Write a cypress test to type in the name and display a warning containing the typed name on button click
