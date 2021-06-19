import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { InputForm } from './InputForm';

describe("InputForm", () => {
    it("renders when loads", () => {
        render(<InputForm label="Name" />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    })
});