import { Outlet } from 'react-router-dom'

import AppBar from 'layouts/MainLayout/components/AppBar'

const MainLayout = () => {
	return (
		<main>
			<AppBar />
			<Outlet />
		</main>
	)
}

export default MainLayout
