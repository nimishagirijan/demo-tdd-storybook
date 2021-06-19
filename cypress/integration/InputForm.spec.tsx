/// <reference types="../support/types"/>
/// <reference path="../support/index.d.ts" />

describe("Inputform Component", () => {   
        //Demo how it should enter a name and display a warning along when clicked on the button       
     it("should enter a name and click on a button to display a warning", () => 
     {              
         cy.visit("http://localhost:6006/iframe.html?id=input-form--input-form-display");              
         cy.get('input').type('Nimisha');              
         cy.get('button').click();              
         cy.contains('You need to fill a form');      
     });
});