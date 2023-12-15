import { ComponentProps, CSSProperties } from 'react'

import styled from '@emotion/styled'

import { FONT_SIZE, FONT_WEIGHT } from '../Txt/constants'

import { BUTTON_SIZE, BUTTON_TYPE } from './constants'

export const Button = (props: ComponentProps<typeof BaseButton>) => {
	return <BaseButton {...props} />
}

const BaseButton = styled.button<{
	size?: keyof typeof BUTTON_SIZE
	color?: keyof typeof BUTTON_TYPE
	display?: CSSProperties['display']
}>(
	FONT_SIZE.f14,
	FONT_WEIGHT.medium,
	(props) => ({
		display: props.display ?? 'inline',
		borderRadius: 8,
		border: '1px solid transparent',
		textAlign: 'center',
		userSelect: 'none',
	}),
	(props) => BUTTON_TYPE[props.color ?? 'primary'],
	(props) => BUTTON_SIZE[props.size ?? 'default'],
)
