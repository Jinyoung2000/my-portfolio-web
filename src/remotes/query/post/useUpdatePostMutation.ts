import { postUpdatePost } from '@/remotes/apis/post'
import { UpdatePostRequest } from '@/remotes/models/Post'
import { useMutation } from '@tanstack/react-query'

export function useUpdatePostMutation(postId: number) {
	const mutation = useMutation({
		mutationFn: (body: UpdatePostRequest) => postUpdatePost(postId, body),
	})

	return {
		updatePost: mutation.mutateAsync,
		isLoading: mutation.status === 'success',
	}
}
