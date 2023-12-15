import { Post } from 'remotes/models/Post'

import { http } from '.'

export async function fetchBoards() {
	const { data } = await http.get<Post[]>('/posts')
	return data
}
