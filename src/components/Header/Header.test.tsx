import { render, screen, fireEvent } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import Header from './index'
import { act } from 'react-dom/test-utils'

describe('Header component', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('renders logo and contact icons', () => {
        render(<Header />)
        expect(screen.getByText('Ruppel - Transporte')).toBeInTheDocument()
        expect(screen.getByTestId('contact-icons')).toBeInTheDocument()
    })

    it('toggles menu on click and auto closes after 5s', async () => {
        render(<Header />)

        const burger = screen.getByRole('button')
        const contactIcons = screen.getByTestId('contact-icons')

        fireEvent.click(burger)
        expect(contactIcons.className).toContain('menuOpen')

        await act(async () => {
            vi.advanceTimersByTime(5000)
        })

        expect(contactIcons.className).not.toContain('menuOpen')
    })

    it('adds scrolled class on scroll', () => {
        render(<Header />)

        window.scrollY = 100
        fireEvent.scroll(window)

        const header = screen.getByRole('banner')
        expect(header.className).toMatch(/headerScrolled/)
    })
})

