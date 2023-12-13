import { Link } from 'react-router-dom'

const AppBar = () => {
	return (
		<header className="px-6 py-2 flex justify-between">
			<Link css={{ cursor: 'pointer' }} to="">
				Home
			</Link>
		</header>
	)
}

export default AppBar
