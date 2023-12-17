import { fetchPosts } from 'remotes/apis/post'

import { useSuspenseQuery } from '@tanstack/react-query'

export function usePosts() {
	const { data } = useSuspenseQuery({
		queryKey: ['posts'],
		queryFn: () => fetchPosts(),
	})

	return data
}
