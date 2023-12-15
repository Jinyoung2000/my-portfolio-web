import { CSSProperties, ComponentProps } from 'react'

import styled from '@emotion/styled'

const FlexComponent = styled.div<{ justify?: CSSProperties['justifyContent']; align?: CSSProperties['alignItems'] }>`
	display: flex;
	justify-content: ${(props) => props.justify};
	align-items: ${(props) => props.align};
`

const Center = (props: Omit<ComponentProps<typeof FlexComponent>, 'justify' | 'align'>) => {
	return <FlexComponent justify="center" align="center" {...props} />
}

export default Object.assign(FlexComponent, { Center })
