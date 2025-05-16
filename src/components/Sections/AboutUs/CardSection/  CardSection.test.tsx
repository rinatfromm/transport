import { render, screen } from '@testing-library/react';
import CardSection from './index';


describe('CardSection component', () => {
    it('renders heading', () => {
        render(
            <CardSection heading="Test Heading" items={[]} />
        );

        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Heading');
    });

    it('renders list items as plain strings', () => {
        const items = ['Item 1', 'Item 2'];

        render(<CardSection heading="My Section" items={items} />);

        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('renders complex list items with subItems', () => {
        const items = [
            { text: 'Main Item', subItems: ['Sub 1', 'Sub 2'] },
        ];

        render(<CardSection heading="Complex Section" items={items} />);

        expect(screen.getByText('Main Item')).toBeInTheDocument();
        expect(screen.getByText('Sub 1')).toBeInTheDocument();
        expect(screen.getByText('Sub 2')).toBeInTheDocument();
    });

    it('renders mixed list items (string and complex)', () => {
        const items = [
            'Simple Item',
            { text: 'Complex Item', subItems: ['Sub A'] },
        ];

        render(<CardSection heading="Mixed Section" items={items} />);

        expect(screen.getByText('Simple Item')).toBeInTheDocument();
        expect(screen.getByText('Complex Item')).toBeInTheDocument();
        expect(screen.getByText('Sub A')).toBeInTheDocument();
    });
});
