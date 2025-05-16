import { render, screen } from '@testing-library/react';
import AboutUs from './index';
import { MemoryRouter } from 'react-router-dom';

describe('AboutUs component', () => {
    it('renders main heading and description', () => {
        render(
            <MemoryRouter>
                <AboutUs />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /über uns/i })).toBeInTheDocument();
        expect(
            screen.getByText(/Ruppel-Transporte – Ihr zuverlässiger Partner für Transporte/i)
        ).toBeInTheDocument();
    });

    it('renders service title and card sections', () => {
        render(
            <MemoryRouter>
                <AboutUs />
            </MemoryRouter>
        );

        expect(screen.getByText('Unsere Leistungen')).toBeInTheDocument();

        expect(screen.getByText('Transportdienstleistungen:')).toBeInTheDocument();
        expect(screen.getByText('Transportervermietung mit Fahrer:')).toBeInTheDocument();
    });
});
