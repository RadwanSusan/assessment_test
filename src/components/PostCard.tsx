import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	CardMedia,
	useTheme,
} from '@mui/material';
import Link from 'next/link';
import { Post } from '../types';
interface PostCardProps {
	post: Post;
}
export default function PostCard({ post }: PostCardProps) {
	const theme = useTheme();
	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				transition: '0.3s',
				'&:hover': {
					transform: 'translateY(-5px)',
					boxShadow: theme.shadows[10],
				},
			}}>
			<CardMedia
				component='img'
				height='140'
				image={`https://picsum.photos/seed/${post.id}/300/200`}
				alt={post.title}
			/>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography
					gutterBottom
					variant='h5'
					component='div'>
					{post.title}
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'>
					{post.body.substring(0, 100)}...
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: 'space-between' }}>
				<Link
					href={`/posts/${post.id}`}
					passHref>
					<Button
						size='small'
						color='primary'>
						Read More
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
