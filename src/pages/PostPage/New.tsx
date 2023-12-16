import Section from '@components/Section'
import { Spacing } from '@components/base'
import { Input } from '@components/base/Input'
import { Txt } from '@components/base/Txt'

const New = () => {
	return (
		<Section>
			<Section.Title>게시글 작성하기</Section.Title>
			<Section.Content>
				<Spacing size={10} />
				<label>
					<Txt size="f14">제목</Txt>
					<Spacing size={5} />
					<Input
						css={{
							width: '100%',
						}}
					/>
				</label>
			</Section.Content>
		</Section>
	)
}
export default New
