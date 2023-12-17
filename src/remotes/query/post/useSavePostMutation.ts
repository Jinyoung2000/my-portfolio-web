import { postSavePost } from '@/remotes/apis/post'
import { useMutation } from '@tanstack/react-query'

export function useSavePostMutation() {
	const mutation = useMutation({
		mutationFn: postSavePost,
	})

	return {
		savePost: mutation.mutateAsync,
		isLoading: mutation.status === 'success',
	}
}
