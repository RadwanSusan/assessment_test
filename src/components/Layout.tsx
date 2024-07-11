import React from 'react';
import Head from 'next/head';
import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Box,
	IconButton,
} from '@mui/material';
import Link from 'next/link';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
interface LayoutProps {
	children: React.ReactNode;
	toggleDarkMode: () => void;
	darkMode: boolean;
}
export default function Layout({
	children,
	toggleDarkMode,
	darkMode,
}: LayoutProps) {
	return (
		<>
			<Head>
				<title>My Blog</title>
			</Head>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						sx={{
							flexGrow: 1,
							textDecoration: 'none',
							cursor: 'pointer',
							color: 'white',
						}}>
						<Link
							href='/'
							passHref
							style={{ textDecoration: 'none', color: 'inherit' }}>
							My Blog
						</Link>
					</Typography>
					<IconButton
						sx={{ ml: 1 }}
						onClick={toggleDarkMode}
						color='inherit'>
						{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
					</IconButton>
				</Toolbar>
			</AppBar>
			<Container
				maxWidth='lg'
				sx={{ mt: 4, mb: 4 }}>
				{children}
			</Container>
			<Box
				component='footer'
				sx={{ bgcolor: 'background.paper', py: 6 }}>
				<Typography
					variant='body2'
					color='text.secondary'
					align='center'>
					Built with
					<span
						role='img'
						aria-label='heart'>
						❤️
					</span>
					by Radwan Susan
				</Typography>
			</Box>
		</>
	);
}
