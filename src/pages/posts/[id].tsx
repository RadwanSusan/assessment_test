import { GetServerSideProps } from 'next';
import { Typography, Paper, Box, Divider, Button } from '@mui/material';
import { Post, Comment } from '../../types';
import CommentList from '../../components/CommentList';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface PostDetailProps {
	post: Post;
	comments: Comment[];
}
export default function PostDetail({ post, comments }: PostDetailProps) {
	return (
		<>
			<Link
				href='/'
				passHref>
				<Button
					startIcon={<ArrowBackIcon />}
					sx={{ mb: 2 }}>
					Back to Posts
				</Button>
			</Link>
			<Paper
				elevation={3}
				sx={{ p: 3 }}>
				<Typography
					variant='h4'
					component='h1'
					gutterBottom>
					{post.title}
				</Typography>
				<Typography
					variant='body1'
					paragraph>
					{post.body}
				</Typography>
				<Box mt={4}>
					<Typography
						variant='h5'
						component='h2'
						gutterBottom>
						Comments
					</Typography>
					<Divider sx={{ mb: 2 }} />
					<CommentList comments={comments} />
				</Box>
			</Paper>
		</>
	);
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params!;
	const [postRes, commentsRes] = await Promise.all([
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
	]);
	const post: Post = await postRes.json();
	const comments: Comment[] = await commentsRes.json();
	return { props: { post, comments } };
};
