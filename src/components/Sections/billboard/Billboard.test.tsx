import { render, screen } from '@testing-library/react';
import Billboard from './index';
import '@testing-library/jest-dom';

describe('Billboard component', () => {
    test('renders the image with correct alt text', () => {
        render(<Billboard />);
        const image = screen.getByAltText(/Von Tür zu Tür – einfach, zuverlässig, professionell./i);
        expect(image).toBeInTheDocument();
    });

    test('renders the slogan text', () => {
        render(<Billboard />);
        const slogan = screen.getByText(/Von Tür zu Tür – einfach, zuverlässig, professionell./i);
        expect(slogan).toBeInTheDocument();
    });

    test('renders the additional service text', () => {
        render(<Billboard />);
        const serviceText = screen.getByText(/Expressfahrten, Möbeltransport, Kurierfahrten, Umzüge/i);
        expect(serviceText).toBeInTheDocument();
    });

    test('renders the button and has correct phone number in href', () => {
        render(<Billboard />);
        const button = screen.getByText(/Kontaktieren Sie uns/i);
        const link = screen.getByRole('link');

        expect(button).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'tel:+4917669653451');
    });
});
