import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LinkButton from './index';

describe('LinkButton', () => {
    it('рендерится с правильным текстом и ссылкой', () => {
        const path = '/test-path';
        const title = 'Click me';
        const className = 'custom-class';

        render(
            <MemoryRouter>
                <LinkButton path={path} title={title} className={className} />
            </MemoryRouter>
        );


        const button = screen.getByRole('button', { name: title });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('custom-class');


        const link = button.closest('a');
        expect(link).toHaveAttribute('href', path);
    });
});