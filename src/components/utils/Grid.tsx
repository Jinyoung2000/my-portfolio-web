import { CSSProperties } from 'react'

import styled from '@emotion/styled'

export const Grid = styled.div<{
	templateRows?: CSSProperties['gridTemplateRows']
	templateColumns?: CSSProperties['gridTemplateColumns']
	rowGap?: CSSProperties['rowGap']
	columnGap?: CSSProperties['columnGap']
}>`
	display: grid;
	grid-template-rows: ${(props) => props.templateRows};
	grid-template-columns: ${(props) => props.templateColumns};
	row-gap: ${(props) => props.rowGap};
	column-gap: ${(props) => props.columnGap};
`
