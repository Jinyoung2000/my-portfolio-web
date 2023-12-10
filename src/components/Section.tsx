import { PropsWithChildren, ReactNode, forwardRef } from 'react'

import styled from '@emotion/styled'

const ForwardedSection = forwardRef<HTMLElement, PropsWithChildren>(({ children }, ref) => {
	return <section ref={ref}>{children}</section>
})

const Title = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<h2 className="font-bold text-2xl mb-2q">{children}</h2>
			<hr className="my-2" />
		</>
	)
}

const Content = styled.div``

const Section = Object.assign(ForwardedSection, {
	Title,
	Content,
})

export default Section
