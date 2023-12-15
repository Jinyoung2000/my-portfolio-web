import { ComponentMeta } from '@storybook/react'

import { Button } from '../Button'

import { BottomTwoButton as BottomTwoButtonComponent } from '.'

export default {
	title: 'BottomTwoButton',
	component: BottomTwoButtonComponent,
} as ComponentMeta<typeof BottomTwoButtonComponent>

export const PrimaryBottomButton = () => (
	<BottomTwoButtonComponent>
		<Button>왼쪽</Button>
		<Button>오른쪽</Button>
	</BottomTwoButtonComponent>
)

export const SecondaryBottomButton = () => (
	<BottomTwoButtonComponent type="secondary">
		<Button>왼쪽</Button>
		<Button>오른쪽</Button>
	</BottomTwoButtonComponent>
)
