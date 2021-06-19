import React from 'react';
import { Story } from '@storybook/react';
import { InputForm, InputFormProps } from "../components/InputForm/InputForm";

export default {
    argTypes: {
        onBlur: { control: { disable: true } },
        onChange: { control: { disable: true } },
        onFocus: { control: { disable: true } },
        onKeyDown: { control: { disable: true } },
    },
    component: InputForm,
    title: "Input Form",
};
const Template: Story<InputFormProps> = (args) => <InputForm {...args} />;

export const InputFormDisplay = Template.bind({});
InputFormDisplay.args = { label: 'Enter Name', };