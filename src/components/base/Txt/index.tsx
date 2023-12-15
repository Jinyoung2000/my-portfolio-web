import { CSSProperties } from 'react'

import { colors } from '@/colors'
import styled from '@emotion/styled'

import { FONT_SIZE, FONT_WEIGHT } from './constants'

interface TxtProps {
	size?: keyof typeof FONT_SIZE
	weight?: keyof typeof FONT_WEIGHT
	color?: string
	align?: CSSProperties['textAlign']
}

export const Txt = styled.div<TxtProps>`
	${(props) => FONT_SIZE[props.size ?? 'f14']}
	${(props) => FONT_WEIGHT[props.weight ?? 'regular']}
	color: ${(props) => props.color ?? colors.textPrimary};
	text-align: ${(props) => props.align ?? 'left'};
`
