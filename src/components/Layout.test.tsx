import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Layout from './Layout';
import { ThemeProvider, createTheme } from '@mui/material';
jest.mock('next/link', () => {
	return ({ children }: { children: React.ReactNode }) => {
		return children;
	};
});
const theme = createTheme();
describe('Layout', () => {
	it('renders the layout with children and dark mode toggle', () => {
		const toggleDarkMode = jest.fn();
		render(
			<ThemeProvider theme={theme}>
				<Layout
					darkMode={false}
					toggleDarkMode={toggleDarkMode}>
					<div>Test Content</div>
				</Layout>
			</ThemeProvider>,
		);
		expect(screen.getByText('My Blog')).toBeInTheDocument();
		expect(screen.getByText('Test Content')).toBeInTheDocument();
		const darkModeToggle = screen.getByRole('button');
		fireEvent.click(darkModeToggle);
		expect(toggleDarkMode).toHaveBeenCalled();
	});
});
