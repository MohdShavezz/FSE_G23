import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../Components/UserList';


const mockData = {
    users: [
        { id: 1, firstName: 'Emily', email: 'emily.johnson@x.dummyjson.com' },
        { id: 2, firstName: 'Michael', email: 'michael.williams@x.dummyjson.com' },
        { id: 3, firstName: 'Sophia', email: 'sophia.brown@x.dummyjson.com' },
        { id: 4, firstName: 'James', email: 'james.davis@x.dummyjson.com' },
        { id: 5, firstName: 'Emma', email: 'emma.miller@x.dummyjson.com' },
    ],
}

describe('UserList Component', () => {

    beforeEach(() => {
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
                json: async () => mockData.users
            })
        ) as any
    })

    afterEach(() => {
        vi.clearAllMocks();
    })  


    test('should render the UserList component', async() => {
        render(<UserList />);
        waitFor(() => {
            expect(screen.getByText('Users List:')).toBeInTheDocument();
             expect(screen.getByText('Emily')).toBeInTheDocument();
            expect(screen.getByText('Michael')).toBeInTheDocument();
            expect(screen.getByText('Sophia')).toBeInTheDocument();
            expect(screen.getByText('James')).toBeInTheDocument();
            expect(screen.getByText('Emma')).toBeInTheDocument();
        });

    })
});
