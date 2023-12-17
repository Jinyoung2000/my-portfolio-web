export const isNotNil = <T>(value?: T | null | undefined): value is T => value != null

export function assert(condition: boolean, ErrorMessage?: string): asserts condition {
	if (!condition) {
		throw new Error(ErrorMessage)
	}
}
