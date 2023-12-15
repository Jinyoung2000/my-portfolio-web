import { ComponentPropsWithRef, forwardRef } from 'react'

import { colors } from '@/colors'
import styled from '@emotion/styled'

import { FONT_SIZE } from '../Txt/constants'

interface InputProps extends ComponentPropsWithRef<typeof BaseInput> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <BaseInput ref={ref} {...props} />
})

const BaseInput = styled.input<{ error?: boolean }>(
	FONT_SIZE.f14,
	{
		padding: '13px 16px',
		borderRadius: 8,
		borderWidth: 1,
		borderStyle: 'solid',
		':focus': {
			outline: 'none',
		},
	},
	(props) =>
		props.error
			? { border: `1px solid ${colors.error}` }
			: {
					borderColor: colors.coolgrey100,
					':not(:disabled)': {
						':focus, :active': {
							borderColor: colors.coolgrey00,
							boxShadow: `0px 0px 0px 2px ${colors.navy400}`,
						},
						':hover': {
							borderColor: colors.coolgrey00,
						},
					},
					':disabled': {
						backgroundColor: colors.backgroundPrimary,
						color: colors.coolgrey500,
					},
			  },
)
