import { render, screen } from '@testing-library/react';
import ServiceList from './index';
import { services } from '../../../data/services';
import '@testing-library/jest-dom';

describe('ServiceList', () => {
    it('renders service list with title and description', () => {
        render(<ServiceList />);

        services.forEach((service) => {
            expect(screen.getByText(service.title)).toBeInTheDocument();
            expect(screen.getByText(service.description)).toBeInTheDocument();
        });
    });

    it('renders icons for each service', () => {
        render(<ServiceList />);

        services.forEach((service) => {
            const icon = screen.getByTestId(`service-icon-${service.id}`);
            expect(icon).toBeInTheDocument();
        });
    });
});
