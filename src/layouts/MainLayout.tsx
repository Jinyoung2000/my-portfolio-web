import { Outlet } from 'react-router-dom'

import AppBar from '@components/AppBar'

const MainLayout = () => {
	return (
		<main>
			<AppBar />
			<Outlet />
		</main>
	)
}

export default MainLayout
