import { Comment } from '../types';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
interface CommentListProps {
	comments: Comment[];
}
export default function CommentList({ comments }: CommentListProps) {
	return (
		<List>
			{comments.map((comment) => (
				<ListItem key={comment.id}>
					<ListItemText
						primary={
							<Typography variant='subtitle1'>{comment.name}</Typography>
						}
						secondary={
							<>
								<Typography
									variant='body2'
									color='textSecondary'>
									{comment.email}
								</Typography>
								<Typography variant='body1'>{comment.body}</Typography>
							</>
						}
					/>
				</ListItem>
			))}
		</List>
	);
}
