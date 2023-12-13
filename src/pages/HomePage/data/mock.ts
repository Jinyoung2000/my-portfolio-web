import { CareerItem } from 'remotes/models/Career'

export const contacts: {
	phoneNumber?: string
	email?: string
} | null = {
	phoneNumber: '010-4676-3959',
	email: 'sjysjy0216@gmail.com',
}

export const sites = {
	githubLink: 'https://github.com/Jinyoung2000',
	linkedInLink: 'https://www.linkedin.com/in/%EC%A7%84%EC%98%81-%EC%84%B1-72b224219/',
}

export const careers: CareerItem[] = [
	{
		id: 1,
		company: { name: '비바리퍼블리카(Toss)', site: 'https://toss.im' },
		descriptions: ['개발', 'UI개발'],
		job: 'Frontend Developer',
		range: {
			start: '2022.11',
		},
	},
	{
		id: 1,
		company: { name: '휴먼스케이프', site: 'https://humanscape.io' },
		descriptions: ['개발', 'UI개발'],
		job: 'Frontend Developer',
		range: {
			start: '2022.04',
			end: '2022.11',
		},
	},
]
