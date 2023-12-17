import { Link } from 'react-router-dom'

import { colors } from '@/colors'

const AppBar = () => {
	return (
		<header
			className="px-6 py-2 flex gap-x-4 sticky top-0"
			css={{
				backgroundColor: colors.coolgrey00,
				borderBottom: `1px solid ${colors.coolgrey30}`,
			}}
		>
			<Link to="">Home</Link>
			<Link to="/posts">Post</Link>
		</header>
	)
}

export default AppBar
