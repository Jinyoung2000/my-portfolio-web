import { ComponentMeta } from '@storybook/react'

import { Txt as TxtComponent } from '.'

export default {
	title: 'Txt',
	component: TxtComponent,
} as ComponentMeta<typeof TxtComponent>

export const Txt = () => <TxtComponent>텍스트12356789abcdefghijklmnopqrstuvwxyz</TxtComponent>
