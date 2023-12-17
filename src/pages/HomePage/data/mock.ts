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
		description:
			'Toss Mobile Tribe\n- 토스 앱 내 토스모바일 오픈알림/신청/가입/개통 퍼널 개발 및 유지보수\n- A/B 테스트 및 데이터 분석을 위한 로깅 추가, 해당 서비스 내 로깅 공통 모듈화\n- TDD를 통한 서비스 안정화',
		job: 'Frontend Developer',
		range: {
			start: '2022.11',
		},
	},
	{
		id: 2,
		company: { name: '휴먼스케이프', site: 'https://humanscape.io' },
		description:
			'레어데이터 MVP 개발 및 신규 런칭\n레어데이터 디자인시스템 개발\n성능 최적화 작업(Virtualization, Memoization)\n\nReact, TypeScript, React-Query',
		job: 'Frontend Developer',
		range: {
			start: '2022.04',
			end: '2022.11',
		},
	},
	{
		id: 3,
		company: { name: '테이블매니저', site: 'https://tablemanager.io' },
		description:
			'더예약 유지보수\n테이블매니저 솔루션 유지보수\n테이블매니저 솔루션 데스크탑 크로스플랫폼 앱 포팅작업\n테이블매니저 웨이팅 모바일앱 유지보수 작업\n\nReact, Angular, Electron, JavaScript',
		job: 'Frontend Developer',
		range: {
			start: '2021.06',
			end: '2022.04',
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
