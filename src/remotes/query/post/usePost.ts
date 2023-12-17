import { fetchPostById } from '@/remotes/apis/post'
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query'

export function usePostById(id: number, options?: Omit<UseSuspenseQueryOptions, 'queryKey' | 'queryFn'>) {
	const { data } = useSuspenseQuery({
		queryKey: ['posts', id],
		queryFn: () => fetchPostById(id),
		...options,
	})

	return data
}
