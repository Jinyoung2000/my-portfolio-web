import { Spacing } from '@components/base'
import Contact from 'pages/Home/components/Contact'
import Profile from 'pages/Home/components/Profile'
import { isNotNil } from 'utils'

import Site from './components/Site'
import { contacts, sites } from './data/mock'

const Home = () => {
	return (
		<section className="px-[20%]">
			<Spacing size={80} />
			<Profile name="성진영" job="Frontend Developer" />
			<Spacing size={40} />
			{isNotNil(contacts) && <Contact contacts={contacts} />}
			{isNotNil(sites) && <Site sites={sites} />}
		</section>
	)
}

export default Home
