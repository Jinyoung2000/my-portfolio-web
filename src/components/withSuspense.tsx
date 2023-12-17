import { ComponentType, Suspense } from 'react'

/**
 * `withSuspense`는 React 컴포넌트를 `Suspense`로 감싸는 고차 컴포넌트(HOC)입니다.
 * 이 함수는 컴포넌트가 비동기 작업(데이터 가져오기나 코드 분할 등)을 기다리면서 fallback을 렌더링하도록 합니다.
 *
 * @param {ComponentType<Props>} WrappedComponent - Suspense로 감쌀 React 컴포넌트.
 * @param {Object} [options]
 *   @param {React.ReactNode} [options.fallback] - WrappedComponent가 로딩되는 동안 표시될 대체 UI.
 *
 * @returns Suspense 바운더리 내에서 WrappedComponent를 렌더링하는 새로운 컴포넌트를 반환합니다. WrappedComponent의 비동기 작업이 끝날때까지 fallback을 렌더링합니다..
 *
 * @example
 * // 사용법
 * const Component = () => {
 * 	const { data } = useSuspenseQuery(...)
 * 	return <div>로딩된 컴포넌트</div>
 * };
 * const ComponentWithSuspense = withSuspense(MyComponent, { fallback: <div>로딩 중...</div> });
 *
 * // 사용
 * <ComponentWithSuspense />
 */

export function withSuspense<Props extends JSX.IntrinsicAttributes>(
	WrappedComponent: ComponentType<Props>,
	options?: { fallback?: React.ReactNode },
) {
	return function WithSuspense(props: Props) {
		return (
			<Suspense fallback={options?.fallback ?? null}>
				<WrappedComponent {...props} />
			</Suspense>
		)
	}
}
