import { fetchBoards } from 'remotes/apis/post'

import { useSuspenseQuery } from '@tanstack/react-query'

export function usePosts() {
	const { data } = useSuspenseQuery({
		queryKey: ['boards'],
		queryFn: () => fetchBoards(),
	})

	return data
}
