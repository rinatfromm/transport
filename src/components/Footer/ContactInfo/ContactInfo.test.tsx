import { render, screen } from "@testing-library/react";
import ContactInfo from "./index";
import "@testing-library/jest-dom";

describe("ContactInfo", () => {
    it("should render the contact information without a link", () => {
        render(<ContactInfo label="Telefon" value="+4917669653451" isLink={false} />);

        expect(screen.getByText(/4917669653451/)).toBeInTheDocument();
        expect(screen.getByText(/Telefon/i)).toBeInTheDocument();

    });

    it("should render the contact information with a mailto link", () => {
        render(<ContactInfo label="E-Mail" value="example@example.com" isLink={true} />);

        const link = screen.getByRole('link', { name: "example@example.com" });
        expect(link).toHaveAttribute('href', 'mailto:example@example.com');
    });

    it("should render the contact information with a tel link", () => {
        render(<ContactInfo label="Telefon" value="+4917669653451" isLink={true} />);

        const link = screen.getByRole('link', { name: /4917669653451/ });
        expect(link).toHaveAttribute('href', 'tel:+4917669653451');
    });
});
