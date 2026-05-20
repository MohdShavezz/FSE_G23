import {describe, expect, it, test} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    test('should render the App component', () => {   
        render(<App />);
        waitFor(() => {
            expect(screen.getByText('Home')).toBeInTheDocument();
            expect(screen.getByText('Counter')).toBeInTheDocument();
            expect(screen.getByText('Users')).toBeInTheDocument();
        });
    })
});
        