import Section from '@components/Section'
import { isNotNil } from 'utils'

import { css } from '@emotion/react'

const Contact = ({ contacts: { phoneNumber, email } }: { contacts: { phoneNumber?: string; email?: string } }) => {
	return (
		<Section>
			<Section.Title>Contract</Section.Title>
			<Section.Content
				css={css`
					display: grid;
					grid-template-columns: max-content auto;
					column-gap: 10px;
				`}>
				{isNotNil(email) && (
					<>
						<b>전화번호</b>
						<span>{phoneNumber}</span>
					</>
				)}
				{isNotNil(email) && (
					<>
						<b>이메일</b>
						<span>{email}</span>
					</>
				)}
			</Section.Content>
		</Section>
	)
}

export default Contact
