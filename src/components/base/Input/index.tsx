import { colors } from '@/colors'
import styled from '@emotion/styled'

import { FONT_SIZE } from '../Txt/constants'

export const Input = styled.input<{ hasError?: boolean }>`
	${FONT_SIZE.f14};
	padding: 13px 16px;
	border-radius: 8px;
	border-width: 1px;
	border-style: solid;

	&:focus {
		outline: none;
	}

	${({ hasError }) =>
		hasError
			? `border: 1px solid ${colors.error};`
			: `
		border-color: ${colors.coolgrey100};

		&[readonly] {
			border: none;
		}

		&:not(:disabled):not([readonly]) {
			&:focus, &:active {
				border-color: ${colors.coolgrey00};
				box-shadow: 0px 0px 0px 2px ${colors.navy400};
			}

			&:hover {
				border-color: ${colors.coolgrey300};
			}
		}

		&:disabled {
			background-color: ${colors.backgroundPrimary};
			color: ${colors.coolgrey500};
		}

	`}
`
