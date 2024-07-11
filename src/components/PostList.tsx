import { Grid } from '@mui/material';
import { Post } from '../types';
import PostCard from './PostCard';
interface PostListProps {
	posts: Post[];
}
export default function PostList({ posts }: PostListProps) {
	return (
		<Grid
			container
			spacing={4}>
			{posts.map((post) => (
				<Grid
					item
					key={post.id}
					xs={12}
					sm={6}
					md={4}>
					<PostCard post={post} />
				</Grid>
			))}
		</Grid>
	);
}
