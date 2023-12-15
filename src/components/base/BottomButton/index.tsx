import { ComponentProps } from 'react'

import { BottomButtonContainer } from '../BottomButtonContainer'
import { Button } from '../Button'

export const BottomButton = (props: Omit<ComponentProps<typeof Button>, 'type' | 'display' | 'css'>) => {
	return (
		<BottomButtonContainer>
			<Button size="large" display="block" css={{ width: '100%' }} {...props} />
		</BottomButtonContainer>
	)
}
