import { render, screen } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
    test('App render correctly', () => { // test case 1
        render(<App />);
    })
    test('Get started content preset', () => { // test case 2 
        render(<App />);
        expect(screen.getByText('Get started')).toBeDefined();
    })
    test.only('increments count on click', async () => {
        render(<App />)
        const button = screen.getByText('Count is 0')
        // expect(button).toBeInTheDocument()
        await userEvent.click(button)
        await userEvent.click(button)
        expect(screen.getByText('Count is 2')).toBeInTheDocument()

    })
})  