import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Typography, Button, Box } from '@mui/material';
import { Post } from '../types';
import PostList from '../components/PostList';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBar from '../components/SearchBar';
interface HomeProps {
	initialPosts: Post[];
}
export default function Home({ initialPosts }: HomeProps) {
	const [posts, setPosts] = useState<Post[]>(initialPosts);
	const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		if (initialPosts.length === 0) {
			loadMorePosts();
		}
	}, []);
	const loadMorePosts = async () => {
		setLoading(true);
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
		);
		const newPosts: Post[] = await res.json();
		setPosts((prevPosts) => [...prevPosts, ...newPosts]);
		setFilteredPosts((prevPosts) => [...prevPosts, ...newPosts]);
		setPage((prevPage) => prevPage + 1);
		setLoading(false);
	};
	const handleSearch = (query: string) => {
		const filtered = posts.filter(
			(post) =>
				post.title.toLowerCase().includes(query.toLowerCase()) ||
				post.body.toLowerCase().includes(query.toLowerCase()),
		);
		setFilteredPosts(filtered);
	};
	return (
		<>
			<Typography
				variant='h3'
				component='h1'
				gutterBottom>
				Latest Posts
			</Typography>
			<SearchBar onSearch={handleSearch} />
			<PostList posts={filteredPosts} />
			<Box
				display='flex'
				justifyContent='center'
				mt={4}>
				{loading ? (
					<LoadingSpinner />
				) : (
					<Button
						variant='contained'
						onClick={loadMorePosts}>
						Load More
					</Button>
				)}
			</Box>
		</>
	);
}
export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10',
	);
	const initialPosts: Post[] = await res.json();
	return { props: { initialPosts } };
};
