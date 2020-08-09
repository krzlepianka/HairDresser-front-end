import React from 'react';
import Button from '../../components/Button/index';

export default {
    title: 'Button',
    component: Button
};

export const Primary = () => (
    <Button>Primary Test Btn</Button>
);

export const Secondary = () => (
    <Button secondary>Primary Test Btn</Button>
);