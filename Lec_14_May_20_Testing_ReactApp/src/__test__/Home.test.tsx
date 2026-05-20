import {describe, expect, it, test} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import Home from '../Home';


describe('Home Component', () => {
    test('should render the Home component', () => {   
        render(<Home />);
        waitFor(() => {
            expect(screen.getByText('this is the home page')).toBeInTheDocument();
        });
    })
});
        