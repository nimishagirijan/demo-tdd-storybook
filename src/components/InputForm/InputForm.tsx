import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './inputform.css';

export interface InputFormProps {
    /**     * Is this the principal call to action on the page?     */
    primary?: boolean;
    /**     * How large should the InputForm be?     */
    placeholderText?: string;
    /**     * InputForm contents     */
    label: string;
}

export const InputForm: React.FC<InputFormProps> = (props) => {
    const [value, setValue] = useState("");
    const handleChange = (event: any) => { setValue(event.target.value) };

    return (
        <form>
            <label className="storybook-label">{props.label}
                <input className="storybook-input" type="text" placeholder={props.placeholderText} value={value} onChange={handleChange} />
            </label>
            <Button isBlue={true} label="Submit" value={value} />
        </form>);

}