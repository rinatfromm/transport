import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Layout from './index';
import { vi } from 'vitest';


vi.mock('../components/Header', () => ({
    default: () => <div data-testid="header">Header</div>,
}));

vi.mock('../components/Footer', () => ({
    default: () => <div data-testid="footer">Footer</div>,
}));

vi.mock('../components/UI/CallButton', () => ({
    default: ({ phoneNumber }: { phoneNumber: string }) => (
        <div data-testid="call-button">{phoneNumber}</div>
    ),
}));

describe('Layout', () => {
    test('renders header, main container, call button and footer', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="*" element={<Layout />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
        expect(screen.getByTestId('call-button')).toHaveTextContent('+4917669653451');
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    test('does not render header on /impressum page', () => {
        render(
            <MemoryRouter initialEntries={['/impressum']}>
                <Routes>
                    <Route path="*" element={<Layout />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.queryByTestId('header')).not.toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
        expect(screen.getByTestId('call-button')).toHaveTextContent('+4917669653451');
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
});