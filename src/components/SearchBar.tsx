import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
interface SearchBarProps {
	onSearch: (query: string) => void;
}
export default function SearchBar({ onSearch }: SearchBarProps) {
	return (
		<TextField
			fullWidth
			variant='outlined'
			placeholder='Search posts...'
			onChange={(e) => onSearch(e.target.value)}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				),
			}}
			sx={{ mb: 4 }}
		/>
	);
}
