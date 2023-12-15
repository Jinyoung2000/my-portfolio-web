import { ComponentType, Suspense } from 'react'

export function withSuspense<Props extends JSX.IntrinsicAttributes>(
	WrappedComponent: ComponentType<Props>,
	options: { fallback: React.ReactNode },
) {
	return function WithSuspense(props: Props) {
		return (
			<Suspense fallback={options.fallback}>
				<WrappedComponent {...props} />
			</Suspense>
		)
	}
}
