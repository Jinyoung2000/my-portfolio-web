import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import Section from '@components/Section'
import { Button, Spacing } from '@components/base'
import Label from '@components/base/LabelInput'
import { Flex } from '@components/utils'
import { withSuspense } from '@components/withSuspense'

import { useSavePostMutation } from '@/remotes/query/post/useSavePostMutation'

const New = () => {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const { savePost, isLoading } = useSavePostMutation()
	const navigate = useNavigate()

	return (
		<Section>
			<Section.Title>게시글 작성하기</Section.Title>
			<Section.Content>
				<Spacing size={10} />
				<Label>
					<Label.Title>제목</Label.Title>
					<Label.Input
						value={title}
						onChange={(e) => {
							// TODO: validation
							setTitle(e.target.value)
						}}
					/>
				</Label>
				<Label>
					<Label.Title>내용</Label.Title>
					<Label.TextArea
						value={content}
						onChange={(e) => {
							// TODO: validation
							setContent(e.target.value)
						}}
					/>
				</Label>
				<Spacing size={10} />
				<Flex justify="flex-end">
					<Button
						onClick={async () => {
							// TODO: useTransition으로 비동기 로딩 처리
							if (isLoading) {
								return
							}
							await savePost({ title, content })
							navigate(`/posts`)
						}}
					>
						작성하기
					</Button>
				</Flex>
			</Section.Content>
		</Section>
	)
}
export default withSuspense(New)
