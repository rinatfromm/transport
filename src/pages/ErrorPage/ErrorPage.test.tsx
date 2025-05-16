import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './index';
import styles from './ErrorPage.module.css';

describe('ErrorPage Component', () => {
    it('should render the error image', () => {
        render(
            <BrowserRouter>
                <ErrorPage />
            </BrowserRouter>
        );
        const errorImg = screen.getByRole('img');
        expect(errorImg).toBeInTheDocument();
        expect(errorImg).toHaveClass(styles.errorImg);
    });

    it('should display the correct error title', () => {
        render(
            <BrowserRouter>
                <ErrorPage />
            </BrowserRouter>
        );
        const title = screen.getByText(/Page Not Found/i);
        expect(title).toBeInTheDocument();
        expect(title).toHaveClass(styles.errorTitle);
    });

    it('should display the correct error text', () => {
        render(
            <BrowserRouter>
                <ErrorPage />
            </BrowserRouter>
        );
        const errorText = screen.getByText(/We’re sorry, the page you requested could not be found./i);
        expect(errorText).toBeInTheDocument();
        expect(errorText).toHaveClass(styles.errorText);
    });

    it('should render the LinkButton with correct path', () => {
        render(
            <BrowserRouter>
                <ErrorPage />
            </BrowserRouter>
        );
        const linkButton = screen.getByRole('link', { name: /Go Home/i });
        expect(linkButton).toBeInTheDocument();
        expect(linkButton).toHaveAttribute('href', '/');
    });
});