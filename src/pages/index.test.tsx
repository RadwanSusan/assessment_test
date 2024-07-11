import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './index';
import { ThemeProvider, createTheme } from '@mui/material';
global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () =>
			Promise.resolve([{ id: 1, title: 'Test Post', body: 'Test body' }]),
	}),
) as jest.Mock;
const theme = createTheme();
describe('Home', () => {
	it('renders the home page with posts', async () => {
		render(
			<ThemeProvider theme={theme}>
				<Home initialPosts={[]} />
			</ThemeProvider>,
		);
		expect(screen.getByText('Latest Posts')).toBeInTheDocument();
		await waitFor(
			() => {
				expect(screen.getByText('Test Post')).toBeInTheDocument();
			},
			{ timeout: 3000 },
		);
	});
});
