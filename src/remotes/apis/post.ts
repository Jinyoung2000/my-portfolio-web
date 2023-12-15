import { Post } from 'remotes/models/Post'

import { http } from '.'

export async function fetchPosts() {
	const { data } = await http.get<Post[]>('/posts')
	return data
}

export async function fetchPostById(postId: number) {
	const { data } = await http.get<Post>(`/posts/${postId}`)
	return data
}

export async function postSavePost(body: Post) {
	const { data } = await http.post('/posts', {
		data: body,
	})
	return data
}
