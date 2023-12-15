import { ComponentMeta } from '@storybook/react'

import { Button } from '../Button'

import { Dialog as DialogComponent } from '.'
import { PrimaryDialog } from './PrimaryDialog'

export default {
	title: 'Dialog',
	component: DialogComponent,
} as ComponentMeta<typeof DialogComponent>

export const Dialog = () => {
	return <DialogComponent title="title" description="내용" button={<Button css={{ width: '100%' }}>닫기</Button>} />
}

export const Primary = () => {
	return (
		<PrimaryDialog
			title="타이틀"
			description="응애"
			leftButton={<Button>닫기</Button>}
			rightButton={<Button>닫기</Button>}
		/>
	)
}
