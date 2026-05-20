import {describe, expect, it, test} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import Counter from '../Components/Counter';

import userEvent from '@testing-library/user-event'

describe('Counter Component', () => {
    test('should render the Counter component', () => {   
        render(<Counter />);
        waitFor(() => {
            expect(screen.getByText('Count:')).toBeInTheDocument();
        });
    })
    test('should increment the count when INC button is clicked', async () => {
        render(<Counter />);
        const incButton = screen.getByText('INC');
        await userEvent.click(incButton);
        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    });
    test('should decrement the count when DEC button is clicked', async () => {
        render(<Counter />);
        const decButton = screen.getByText('DEC');
        await userEvent.click(decButton);
        await userEvent.click(decButton);
        expect(screen.getByText('Count: -2')).toBeInTheDocument();
    });
    test('should reset the count when RESET button is clicked', async () => {
        render(<Counter />);
        const resetButton = screen.getByText('RESET');
        await userEvent.click(resetButton);        
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    });
    test('onChange should update the count when input value is changed', async () => {
        render(<Counter />);
        const input = screen.getByPlaceholderText('Count')
        await userEvent.type(input, '55');
        expect(screen.getByText('Count: 55')).toBeInTheDocument();
    });
});