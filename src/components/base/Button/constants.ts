import { colors } from '@/colors'
import { css } from '@emotion/react'

export const BUTTON_SIZE = {
	large: css({
		padding: '17px 11px',
	}),
	default: css({
		padding: '13px 11px',
	}),
	small: css({
		padding: '10px 11px',
	}),
	tiny: css({
		padding: '6px 11px',
	}),
}

export type ButtonType = keyof typeof BUTTON_TYPE

export const BUTTON_TYPE = {
	primary: css({
		backgroundColor: colors.buttonPrimary,
		color: colors.coolgrey00,
		':not(:disabled)': {
			':hover, :active': {
				backgroundColor: colors.navy850,
			},
		},
		':disabled': {
			backgroundColor: colors.navy400,
		},
	}),
	secondary: css({
		backgroundColor: colors.coolgrey40,
		color: colors.coolgrey800,
		':not(:disabled)': {
			':hover, :active': {
				backgroundColor: colors.coolgrey60,
			},
		},
		':disabled': {
			color: colors.coolgrey300,
		},
	}),
	tertiary: css({
		backgroundColor: colors.coolgrey00,
		color: colors.navy800,
		border: `1px solid ${colors.navy400}`,
		':not(:disabled)': {
			':hover, :active': {
				backgroundColor: colors.coolgrey30,
			},
		},
		':disabled': {
			backgroundColor: colors.coolgrey40,
		},
	}),
}
