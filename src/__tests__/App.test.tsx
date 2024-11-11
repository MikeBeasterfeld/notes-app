import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Index from '@/pages/Index';

describe('it does stuff', () => {
    it("should pass", () => {
        render(<Index />);

        expect(screen.getByText('Vite + React + Ts + Tailwind + Shadcn')).toBeInTheDocument();
    })
})
