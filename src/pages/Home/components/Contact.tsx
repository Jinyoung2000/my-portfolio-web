import { isNotNil } from 'utils'
import { Spacing } from '@components/base'

import { css } from '@emotion/react'

const Contact = ({ contacts: { phoneNumber, email } }: { contacts: { phoneNumber?: string; email?: string } }) => {
	return (
		<section className="text-sm">
			<h2 className="font-bold text-2xl">Contact</h2>
			<Spacing size={20} />
			<div
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
			</div>
		</section>
	)
}

export default Contact
