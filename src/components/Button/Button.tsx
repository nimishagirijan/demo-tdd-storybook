import React, { Fragment, useState } from 'react'; import './button.css';
export interface ButtonProps {
    /**   * Is this the principal call to action on the page?   */
    isBlue?: boolean;
    /**   * What background color to use   */
    backgroundColor?: string;
    /**   * How large should the button be?   */
    size?: 'small' | 'medium' | 'large';
    /**   * Button contents   */
    label: string;
    /****   * Value can be a name   *   */
    value?: string
    /**   * Optional click handler   */
    onClick?: () => void;
}

/** * Primary UI component for user interaction */
export const Button: React.FC<ButtonProps> = ({ isBlue = false, size = 'medium', backgroundColor, label, ...props }) => {
    const mode = isBlue ? 'storybook-button--primary' : 'storybook-button--secondary';
    const [showWarning, setWarning] = useState(false);

    return (
        <Fragment>
            <button type="button" data-testId="button" className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
                style={{ backgroundColor }}
                {...props}
                onClick={() => setWarning(true)}>{label}</button>
            {showWarning && <div><span data-testId="warning">{props.value ? props.value + " -" : null} You need to fill a form</span></div>}
        </Fragment>);
};