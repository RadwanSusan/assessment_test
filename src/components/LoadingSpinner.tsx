import { CircularProgress, Box } from '@mui/material';
export default function LoadingSpinner() {
	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			minHeight='50vh'>
			<CircularProgress />
		</Box>
	);
}
