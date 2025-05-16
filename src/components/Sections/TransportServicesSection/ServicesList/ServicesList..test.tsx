import { render, screen } from '@testing-library/react';
import ServicesList from './index';
import { transportServicesData } from '../../../../data/transportServicesData';
import '@testing-library/jest-dom';

describe('ServicesList', () => {
    it('renders services list with titles and items', () => {
        render(<ServicesList />);

        transportServicesData.forEach((section) => {
            expect(screen.getByText(section.title)).toBeInTheDocument();

            section.items.forEach((item) => {
                expect(screen.getByText(item)).toBeInTheDocument();
            });
        });
    });
});
