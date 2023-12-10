import { ReactNode } from 'react'

export const Separated = ({
	separator,
	children,
	withStart,
	withEnd,
}: {
	separator: ReactNode
	children: ReactNode[]
	withStart?: boolean
	withEnd?: boolean
}) => {
	let separatedChildren: ReactNode[] = []

	if (withStart) {
		separatedChildren.push(separator)
	}

	children.forEach((child, index) => {
		if (index < children.length - 1) {
			separatedChildren = [...separatedChildren, child, separator]
		} else {
			separatedChildren.push(child)
		}
	})

	if (withEnd) {
		separatedChildren.push(separator)
	}

	return <>{separatedChildren}</>
}
