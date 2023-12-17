import { ComponentMeta } from '@storybook/react'

import { Input as InputComponent } from '.'

export default {
	title: 'Input',
	component: InputComponent,
} as ComponentMeta<typeof InputComponent>

export const Default = () => <InputComponent />

export const Disabled = () => <InputComponent disabled value="disabled text" />

export const Error = () => <InputComponent hasError />
