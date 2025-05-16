import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import MainPage from './index';

vi.mock('../../components/Sections/AboutUs', () => ({
    default: () => <div data-testid="about-us" />,
}));

vi.mock('../../components/Sections/Billboard', () => ({
    default: () => <div data-testid="billboard" />,
}));

vi.mock('../../components/Sections/ServiceList', () => ({
    default: () => <div data-testid="service-list" />,
}));

vi.mock('../../components/Sections/GallerySection', () => ({
    default: () => <div data-testid="gallery-section" />,
}));

vi.mock('../../components/Sections/TransportServicesSection', () => ({
    default: () => <div data-testid="transport-services-section" />,
}));

describe('MainPage', () => {
    it('renders all main sections', () => {
        render(<MainPage />);

        expect(screen.getByTestId('billboard')).toBeInTheDocument();
        expect(screen.getByTestId('service-list')).toBeInTheDocument();
        expect(screen.getByTestId('about-us')).toBeInTheDocument();
        expect(screen.getByTestId('gallery-section')).toBeInTheDocument();
        expect(screen.getByTestId('transport-services-section')).toBeInTheDocument();
    });
});