import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './index';

describe('Footer component', () => {
    it('renders contact title and info items', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        expect(screen.getByText('Kontakt')).toBeInTheDocument();

        const impressumLink = screen.getByRole('link', { name: /impressum/i });
        expect(impressumLink).toHaveAttribute('href', '/impressum');

        expect(screen.getByText('Ruppel-Transporte')).toBeInTheDocument();
        expect(screen.getByText('Svetlana Ruppel')).toBeInTheDocument();
        expect(screen.getByText(/Neudammstraße/)).toBeInTheDocument();
        expect(screen.getByText('+4917669653451')).toBeInTheDocument();
        expect(screen.getByText('info@ruppel-transporte.de')).toBeInTheDocument();
    });

    it('renders phone and email as links', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        const phoneLink = screen.getByText('+4917669653451');
        expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+4917669653451');

        const emailLink = screen.getByText('info@ruppel-transporte.de');
        expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:info@ruppel-transporte.de');
    });
});
