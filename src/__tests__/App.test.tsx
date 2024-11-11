import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('it does stuff', () => {
    it("should pass", () => {
        render(<App />);

        expect(screen.getByText('Vite + React + Ts + Tailwind + Shadcn')).toBeInTheDocument();
    })
})
