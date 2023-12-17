import { PropsWithChildren, useId, useLayoutEffect, useMemo } from 'react'

import styled from '@emotion/styled'
import ReactDOM from 'react-dom'

type PortalProps = PropsWithChildren

const Portal = ({ children }: PortalProps) => {
	const id = useId()
	const element = useMemo(() => {
		const el = document.createElement('div')
		el.id = id
		return el
	}, [id])

	useLayoutEffect(() => {
		if (!element) {
			return () => {
				// ELEMENT
			}
		}
		document.body.appendChild(element)
		return () => document.body.removeChild(element)
	}, [element])

	if (!element) {
		return null
	}
	return ReactDOM.createPortal(<ModalBackground>{children}</ModalBackground>, element)
}

export default Portal

const ModalBackground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(18, 22, 26, 0.72);
`
