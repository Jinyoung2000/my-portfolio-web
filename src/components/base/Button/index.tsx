import { CSSProperties } from 'react'

import styled from '@emotion/styled'

import { FONT_SIZE, FONT_WEIGHT } from '../Txt/constants'

import { BUTTON_SIZE, BUTTON_TYPE } from './constants'

export const Button = styled.button<{
	size?: keyof typeof BUTTON_SIZE
	color?: keyof typeof BUTTON_TYPE
	display?: CSSProperties['display']
}>`
	${FONT_SIZE.f14};
	${FONT_WEIGHT.medium};
	display: ${({ display }) => display ?? 'inline'};
	border-radius: 8px;
	border: 1px solid transparent;
	text-align: center;
	user-select: none;

	${({ color }) => BUTTON_TYPE[color ?? 'primary']}
	${({ size }) => BUTTON_SIZE[size ?? 'default']}
`
