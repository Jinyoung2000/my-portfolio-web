import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button as ButtonComponent } from '.'

export default {
	title: 'Button',
	component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) => {
	return (
		<div>
			<ButtonComponent {...args} onClick={() => alert('버튼 클릭')} display="block">
				Button
			</ButtonComponent>
			<ButtonComponent css={{ marginTop: 10 }} {...args} onClick={() => alert('버튼 클릭')} disabled>
				Disabled Button
			</ButtonComponent>
		</div>
	)
}

export const Button = Template.bind({})
