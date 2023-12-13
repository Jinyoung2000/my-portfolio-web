import { CareerItem } from 'remotes/models/Career'
import { Post } from 'remotes/models/Post'

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

export const posts: Post[] = [
	{
		id: 1,
		title: '첫 번째 포스트',
		content: '이것은 첫 번째 포스트의 내용입니다. 여기에 더 많은 텍스트가 들어갈 수 있습니다.',
		createdAt: '2023-01-01',
	},
	{
		id: 2,
		title: '두 번째 포스트',
		content: '두 번째 포스트의 내용입니다. 다양한 정보를 포함할 수 있습니다.',
		createdAt: '2023-01-02',
	},
	{
		id: 3,
		title: '세 번째 포스트',
		content: '세 번째 포스트에 대한 설명입니다. 이곳에는 예시 텍스트가 들어갑니다.',
		createdAt: '2023-01-03',
	},
]
