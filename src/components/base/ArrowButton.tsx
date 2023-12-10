type ArrowButtonProps = React.SVGAttributes<SVGSVGElement>

export const ArrowButton = ({ ...props }: ArrowButtonProps) => {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/ArrowButtonBox"
			{...props}>
			<path
				d="M4.6875 9.495L8.1875 5.99499L4.6875 2.49499"
				stroke="#6C7680"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
