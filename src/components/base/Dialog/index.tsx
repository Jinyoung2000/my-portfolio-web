import { ReactNode } from 'react'

import { colors } from '@/colors'
import Portal from '@/Portal'
import styled from '@emotion/styled'

import { Spacing } from '..'
import { Txt } from '../Txt'

interface Props {
	title: string
	description?: string
	button: ReactNode
}

export const Dialog = ({ title, description, button }: Props) => {
	return (
		<Portal>
			<DialogBox>
				<Txt align="center" size="f16" color={colors.coolgrey800}>
					{title}
				</Txt>
				<Spacing size={16} />
				<Txt size="f12" color={colors.coolgrey700} align="center">
					{description}
				</Txt>
				<Spacing size={16} />
				{button}
			</DialogBox>
		</Portal>
	)
}

const DialogBox = styled.div`
	padding: 16px;
	border-radius: 12px;
	background: ${colors.coolgrey00};
	width: 296px;
`
