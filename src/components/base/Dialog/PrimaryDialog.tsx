import { ComponentProps, MouseEventHandler, ReactNode } from 'react'

import { BottomTwoButton } from '../BottomTwoButton'
import { Button } from '../Button'

import { Dialog } from '.'

interface PrimaryDialogProps extends Omit<ComponentProps<typeof Dialog>, 'button'> {
	leftButton: ReactNode
	rightButton: ReactNode
	onLeftButtonClick?: MouseEventHandler<HTMLButtonElement>
	onRightButtonClick?: MouseEventHandler<HTMLButtonElement>
}

export const PrimaryDialog = ({
	title,
	description,
	leftButton,
	rightButton,
	onLeftButtonClick,
	onRightButtonClick,
}: PrimaryDialogProps) => {
	return (
		<Dialog
			title={title}
			description={description}
			button={
				<BottomTwoButton type="primary">
					{typeof leftButton === 'string' ? <Button onClick={onLeftButtonClick}>{leftButton}</Button> : leftButton}
					{typeof rightButton === 'string' ? <Button onClick={onRightButtonClick}>{rightButton}</Button> : rightButton}
				</BottomTwoButton>
			}
		/>
	)
}
