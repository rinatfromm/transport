import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Impressum from './index';

describe('Impressum Component', () => {
    test('should render the main title', () => {
        render(
            <MemoryRouter>
                <Impressum />
            </MemoryRouter>
        );
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Impressum');
    });
});