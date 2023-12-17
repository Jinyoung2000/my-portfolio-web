import Section from '@components/Section'
import { Spacing } from '@components/base'
import Label from '@components/base/LabelInput'

const New = () => {
	return (
		<Section>
			<Section.Title>게시글 작성하기</Section.Title>
			<Section.Content>
				<Spacing size={10} />
				<Label>
					<Label.Title>하이</Label.Title>
					<Label.Input error={<Label.Input.Error>에러</Label.Input.Error>} />
				</Label>
				<Label>
					<Label.Title>내용</Label.Title>
					<Label.TextArea />
				</Label>
			</Section.Content>
		</Section>
	)
}
export default New
