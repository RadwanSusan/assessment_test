import React from 'react';
import { render, screen } from '@testing-library/react';
import PostCard from './PostCard';
import { ThemeProvider, createTheme } from '@mui/material';
jest.mock('next/link', () => {
	return ({ children }: { children: React.ReactNode }) => {
		return children;
	};
});
const theme = createTheme();
describe('PostCard', () => {
	it('renders post title and truncated body', () => {
		const post = {
			id: 1,
			title: 'Test Post',
			body: 'This is a test post body that is longer than 100 characters to ensure that it gets truncated properly in the PostCard component.',
		};
		render(
			<ThemeProvider theme={theme}>
				<PostCard post={post} />
			</ThemeProvider>,
		);
		expect(screen.getByText('Test Post')).toBeInTheDocument();
		expect(
			screen.getByText(
				/This is a test post body that is longer than 100 characters/,
			),
		).toBeInTheDocument();
		expect(screen.getByText('Read More')).toBeInTheDocument();
	});
});
