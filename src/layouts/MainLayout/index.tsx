import { Outlet } from 'react-router-dom'

import { Spacing } from '@components/base'
import AppBar from 'layouts/MainLayout/components/AppBar'

const MainLayout = () => {
	return (
		<main>
			<AppBar />
			<div className="px-[20%]">
				<Spacing size={80} />
				<Outlet />
			</div>
		</main>
	)
}

export default MainLayout
