import { useRef } from 'react'

import { Separated, Spacing } from '@components/base'
import Contact from 'pages/Home/components/Contact'
import Profile from 'pages/Home/components/Profile'
import { isNotNil } from 'utils'

import Career from './components/Career'
import Introduction from './components/Introduction'
import Site from './components/Site'
import { careers, contacts, sites } from './data/mock'

const Home = () => {
	const careerSectionRef = useRef<HTMLElement>(null)
	return (
		<section className="px-[20%]">
			<Spacing size={80} />
			<Profile name="성진영" job="Frontend Developer" />
			<Spacing size={40} />
			{isNotNil(contacts) && <Contact contacts={contacts} />}
			{isNotNil(sites) && <Site sites={sites} />}

			{/* <Spacing size={200} />
			<ShowCareerButton
				onClick={() => {
					careerSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
				}}
			/> */}
			<Separated separator={<Spacing size={120} />} withStart withEnd>
				<Introduction />
				{isNotNil(careers) && <Career ref={careerSectionRef} careers={careers} />}
			</Separated>
		</section>
	)
}

export default Home
