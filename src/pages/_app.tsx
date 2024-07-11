import { useState, useMemo, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }: AppProps) {
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		const savedMode = localStorage.getItem('darkMode');
		if (savedMode) {
			setDarkMode(JSON.parse(savedMode));
		}
	}, []);
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkMode ? 'dark' : 'light',
					primary: {
						main: '#1976d2',
					},
					secondary: {
						main: '#dc004e',
					},
				},
			}),
		[darkMode],
	);
	const toggleDarkMode = () => {
		const newMode = !darkMode;
		setDarkMode(newMode);
		localStorage.setItem('darkMode', JSON.stringify(newMode));
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout
				darkMode={darkMode}
				toggleDarkMode={toggleDarkMode}>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
export default MyApp;
