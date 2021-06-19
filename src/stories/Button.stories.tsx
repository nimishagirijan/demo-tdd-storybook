import React from 'react'; import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from "../components/Button/Button";


export default {
  argTypes: {
    onBlur: { control: { disable: true } },
    onChange: { control: { disable: true } },
    onFocus: { control: { disable: true } },
    onKeyDown: { control: { disable: true } },
    backgroundColor: { control: 'color' },
    onClick: { action: 'You need to fill in the form!' },
  },
  component: Button,
  title: "Button",
};
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { isBlue: true, label: 'Primary', };