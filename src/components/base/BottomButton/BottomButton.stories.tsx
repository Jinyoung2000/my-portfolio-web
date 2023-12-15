import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BottomButton as BottomButtonComponent } from '.'

export default {
	title: 'BottomButton',
	component: BottomButtonComponent,
} as ComponentMeta<typeof BottomButtonComponent>

const Template: ComponentStory<typeof BottomButtonComponent> = () => {
	return <BottomButtonComponent>신청하기</BottomButtonComponent>
}

export const BottomButton = Template.bind({})
