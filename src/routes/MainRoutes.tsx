import { Route, Routes } from 'react-router-dom'

import MainLayout from 'layouts/MainLayout'
import HomePage from 'pages/HomePage'

const MainRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
			</Route>
		</Routes>
	)
}

export default MainRoutes
