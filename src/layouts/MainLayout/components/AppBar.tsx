import { Link } from 'react-router-dom'

const AppBar = () => {
	return (
		<header className="px-6 py-2 flex gap-x-4">
			<Link to="">Home</Link>
			<Link to="/posts">Post</Link>
		</header>
	)
}

export default AppBar
