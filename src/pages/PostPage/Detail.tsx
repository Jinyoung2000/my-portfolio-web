import { useState } from 'react'

import { useParams } from 'react-router-dom'

import Section from '@components/Section'
import { Button, Spacing } from '@components/base'
import Label from '@components/base/LabelInput'
import { Flex } from '@components/utils'
import { withSuspense } from '@components/withSuspense'

import { usePostById } from '@/remotes/query/post/usePost'
import { useUpdatePostMutation } from '@/remotes/query/post/useUpdatePostMutation'
import { assert } from '@/utils'

const Detail = () => {
	const { postId } = useParams()
	assert(postId != null, 'postId is required')
	const post = usePostById(postId)
	const [isEditing, setEdit] = useState(false)
	const { updatePost } = useUpdatePostMutation(post.id)
	const [title, setTitle] = useState(post.title)
	const [content, setContent] = useState(post.content)

	return (
		<Section>
			<Section.Title>게시글</Section.Title>
			<Section.Content>
				<Label>
					<Label.Title>제목</Label.Title>
					<Label.Input
						readOnly={!isEditing}
						value={title}
						onChange={(e) => {
							setTitle(e.target.value)
						}}
					/>
				</Label>
				<Label>
					<Label.Title>내용</Label.Title>
					<Label.TextArea
						readOnly={!isEditing}
						value={content}
						onChange={(e) => {
							setContent(e.target.value)
						}}
					/>
				</Label>
			</Section.Content>
			<Spacing size={10} />
			<Flex justify="flex-end">
				{isEditing ? (
					<Button
						onClick={async () => {
							await updatePost({ title, content })
							setEdit(false)
						}}
					>
						저장하기
					</Button>
				) : (
					<Button
						onClick={() => {
							setEdit(true)
						}}
					>
						게시글 수정하기
					</Button>
				)}
			</Flex>
		</Section>
	)
}

export default withSuspense(Detail)
