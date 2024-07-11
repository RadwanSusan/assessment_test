export interface Post {
	id: number;
	title: string;
	body: string;
}
export interface Comment {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}
