export interface CareerItem {
	id: number
	range: {
		start: string
		end?: string
	}
	company: {
		name: string
		site?: string
	}
	job: string
	description: string
}
