import { Spacing } from '@components/base'
import Contact from 'pages/Home/components/Contact'
import Profile from 'pages/Home/components/Profile'
import { isNotNil } from 'utils'

const contactInfo: {
	phoneNumber?: string
	email?: string
} | null = {
	phoneNumber: '010-4676-3959',
	email: 'sjysjy0216@gmail.com',
}

const Home = () => {
	return (
		<section>
			<Spacing size={80} />
			<Profile name="성진영" job="Frontend Developer" />
			<Spacing size={40} />
			{isNotNil(contactInfo) && <Contact phoneNumber={contactInfo.phoneNumber} email={contactInfo.email} />}
		</section>
	)
}

export default Home
