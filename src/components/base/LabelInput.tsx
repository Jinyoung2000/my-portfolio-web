import { ComponentProps, ReactNode } from 'react'

import { css } from '@emotion/react'

import { Input as BaseInput } from './Input'
import { Txt } from './Txt'

import { TextArea as BaseTextArea } from '.'

const Label = ({ children }: { children: ReactNode }) => (
	<label
		css={css`
			position: relative;
			width: 100%;
		`}
	>
		{children}
	</label>
)

const Title = ({ children }: { children: ReactNode }) => (
	<div
		css={css`
			display: flex;
			align-items: center;
			height: 40px;
		`}
	>
		<Txt size="f12" weight="bold">
			{children}
		</Txt>
	</div>
)

const Error = ({ children }: { children: ReactNode }) => (
	<Txt
		size="f10"
		css={css`
			margin-top: 5px;
			color: red;
		`}
	>
		{children}
	</Txt>
)

const Input = ({
	error,
	...props
}: ComponentProps<typeof BaseInput> & { hasError?: boolean; error?: React.ReactNode }) => (
	<div
		css={css`
			display: flex;
			flex-direction: column;
			column-gap: 5px;
		`}
	>
		<BaseInput spellCheck={false} {...props} />
		{props.hasError && error}
	</div>
)

const TextArea = ({
	error,
	...props
}: ComponentProps<typeof BaseTextArea> & { hasError?: boolean; error?: React.ReactNode }) => (
	<div
		css={css`
			display: flex;
			flex-direction: column;
			column-gap: 5px;
		`}
	>
		<BaseTextArea spellCheck={false} {...props} />
		{props.hasError && error}
	</div>
)

Input.Error = Error

Label.Title = Title
Label.Input = Input
Label.TextArea = TextArea

export default Label
