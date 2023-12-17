import {
	Children,
	cloneElement,
	ComponentProps,
	isValidElement,
	MouseEventHandler,
	ReactElement,
	ReactNode,
} from 'react'

import { colors } from '@/colors'

import { Grid } from '../../utils/Grid'
import { Button } from '../Button'

interface BottomTwoButtonProps {
	type?: 'primary' | 'secondary'
	children: ReactNode
	size?: ComponentProps<typeof Button>['size']
	onLeftButtonClick?: MouseEventHandler<HTMLButtonElement>
	onRightButtonClick?: MouseEventHandler<HTMLButtonElement>
}

export const FixedBottomTwoButton = ({ type = 'primary', children }: BottomTwoButtonProps) => {
	const leftButtonColor = type === 'primary' ? 'secondary' : 'tertiary'

	const childrenWithProps = Children.map(children as ReactElement<ComponentProps<typeof Button>>, (child, index) => {
		if (isValidElement(child)) {
			return cloneElement(child, { color: index === 0 ? leftButtonColor : 'primary', size: 'large' })
		}
		return child
	})

	return (
		<div
			css={{
				position: 'fixed',
				width: '100%',
				bottom: 0,
				left: 0,
				padding: '16px 12px 16px',
				backgroundColor: colors.coolgrey00,
				boxShadow: '0px -2px 4px rgba(18, 22, 26, 0.04)',
			}}
		>
			<Grid templateColumns={type === 'primary' ? '2fr 3fr' : '1fr 1fr'} columnGap={8}>
				{childrenWithProps}
			</Grid>
		</div>
	)
}

export const BottomTwoButton = ({ type = 'primary', children, size }: BottomTwoButtonProps) => {
	const leftButtonColor = type === 'primary' ? 'secondary' : 'tertiary'

	const childrenWithProps = Children.map(children as ReactElement<ComponentProps<typeof Button>>, (child, index) => {
		if (isValidElement(child)) {
			return cloneElement(child, { color: index === 0 ? leftButtonColor : 'primary', size })
		}
		return child
	})

	return (
		<Grid templateColumns={type === 'primary' ? '2fr 3fr' : '1fr 1fr'} columnGap={8}>
			{childrenWithProps}
		</Grid>
	)
}
