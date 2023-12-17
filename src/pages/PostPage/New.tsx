import { useState } from 'react'

import Section from '@components/Section'
import { Button, Spacing } from '@components/base'
import Label from '@components/base/LabelInput'

import { css } from '@emotion/react'

const New = () => {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

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
							setTitle(e.target.value)
						}}
					/>
				</Label>
				<Label>
					<Label.Title>내용</Label.Title>
					<Label.TextArea
						value={content}
						onChange={(e) => {
							setContent(e.target.value)
						}}
					/>
				</Label>
				<Spacing size={10} />
				<Button
					css={css`
						align-self: flex-end;
					`}
				/>
			</Section.Content>
		</Section>
	)
}
export default New
