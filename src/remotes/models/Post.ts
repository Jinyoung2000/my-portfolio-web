export interface Post {
	id: number
	title: string
	content: string
	createdAt: string
}

export type SavePostRequest = Omit<Post, 'id' | 'createdAt'>
export type UpdatePostRequest = Omit<Post, 'id' | 'createdAt'>
