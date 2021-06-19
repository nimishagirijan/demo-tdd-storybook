import "@testing-library/jest-dom";
import { fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import { Button } from './Button';

describe("Button", () => {
    
    test("renders in the blue mode", () => { 
        render(<Button isBlue={true} label="Submit" />); 
        expect(screen.getByRole('button')).toHaveClass('storybook-button--primary'); 
    });
    
    // Demo to test to display a warning message on click of the button        
    test(" displays a warning on click of the button", ()=> {            
    render(<Button isBlue={true} label="Submit"/>);
    fireEvent.click(screen.getByRole('button'));
    expect((screen.getByTestId('warning'))).toHaveTextContent('You need to fill a form');
    });

})