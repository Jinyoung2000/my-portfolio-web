import { Spacing } from '@components/base'

import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const iconContextProviderProps: IconContext = {
	size: '24px',
	style: {
		cursor: 'pointer',
	},
}

const Site = ({
	sites,
}: {
	sites: {
		githubLink?: string
		linkedInLink?: string
	}
}) => {
	return (
		<div>
			<Spacing size={20} />
			<IconContext.Provider value={iconContextProviderProps}>
				<div className="flex gap-x-4">
					{sites.githubLink != null && <FaGithub onClick={() => window.open(sites.githubLink)} />}
					{sites.linkedInLink != null && <FaLinkedin onClick={() => window.open(sites.linkedInLink)} />}
				</div>
			</IconContext.Provider>
		</div>
	)
}

export default Site
