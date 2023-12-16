import { ComponentProps, PropsWithChildren, ReactNode } from 'react'

import styled from '@emotion/styled'

import { Input } from './Input'
import { Txt } from './Txt'

const LabelInputBox = styled.label`
	position: relative;
	width: 100%;
`

const LabelBox = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
`

const InputBox = styled.div`
	display: flex;
	column-gap: 5px;
`

type InputProps = ComponentProps<typeof Input>

interface LabelInputProps extends InputProps {
	name: string
	button?: ReactNode
	extraMessage?: string
	errorMessage?: string | null
}

const LabelInput = ({
	name,
	button,
	extraMessage,
	errorMessage,
	children,
	...props
}: PropsWithChildren<LabelInputProps>) => {
	return (
		<LabelInputBox>
			<LabelBox>
				<Txt size="f12" weight="bold">
					{name}
				</Txt>
			</LabelBox>
			{children}
			<InputBox>
				<Input spellCheck={false} {...props} />
				{button}
			</InputBox>
			{!errorMessage && extraMessage && (
				<Txt
					size="f10"
					color="placeholder"
					css={{
						marginTop: 5,
					}}>
					{extraMessage}
				</Txt>
			)}
			{errorMessage && (
				<Txt
					size="f10"
					css={{
						marginTop: 5,
						color: '#CC4400',
					}}>
					{errorMessage}
				</Txt>
			)}
		</LabelInputBox>
	)
}

export default LabelInput
