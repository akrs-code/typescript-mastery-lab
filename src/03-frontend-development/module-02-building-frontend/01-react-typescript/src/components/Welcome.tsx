import React from 'react';

/**
 * Props for the Welcome component.
 * @property {string} name - The name of the person being welcomed.
 */
type WelcomeProps = {
    name: string;
};

/**
 * A functional component that renders a welcome message.
 * Demonstrates the use of React.FC type.
 */
export const Welcome: React.FC<WelcomeProps> = ({ name }) => {
    return <h1>Welcome, {name}!</h1>;
};

export default Welcome;