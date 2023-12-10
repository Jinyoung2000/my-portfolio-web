export const Spacing = ({ size }: { size: number | string }) => {
	return (
		<div
			className="flex-1"
			css={{
				minWidth: size,
				minHeight: size,
			}}
		/>
	)
}
