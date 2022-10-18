import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('Test app', () => {
    test('render app', () => {
        render(<App />);
        const linkElement = screen.getByText(/hello from react/i);
        const button = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/Type here .../i);

        expect(linkElement).toBeInTheDocument();
        expect(button).toMatchSnapshot();
        expect(input).toBeInTheDocument();
    });

    test('test with classname', async () => {
        render(<App />);
        screen.debug();
        const data = await screen.findByText(/data/i);
        expect(data).toBeInTheDocument();
        expect(data).toHaveClass('accent');
        screen.debug();
    });

    test('test click event', () => {
        render(<App />);
        const btn = screen.getByTestId('toggle-btn');

        expect(screen.queryByTestId('list')).toBeNull();

        fireEvent.click(btn);
        expect(screen.queryByTestId('list')).toBeInTheDocument();

        fireEvent.click(btn);
        expect(screen.queryByTestId('list')).toBeNull();
    });

    test('test input element', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Type here .../i);
        const value = 'New value';

        expect(screen.queryByTestId('value-element')).toHaveTextContent('');

        // Artifical event
        // fireEvent.input(input, {
        //     target: {value}
        // });

        // Real user event
        userEvent.type(input, value);
        expect(screen.queryByTestId('value-element')).toHaveTextContent(value);

    });
});

