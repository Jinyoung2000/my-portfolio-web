import { fetchPostById } from '@/remotes/apis/post'
import { useSuspenseQuery } from '@tanstack/react-query'

export function usePostById(_postId: number | string) {
	const postId = Number(_postId)
	const { data } = useSuspenseQuery({
		queryKey: ['posts', postId],
		queryFn: () => fetchPostById(postId),
	})

	return data
}
