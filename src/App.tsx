import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from 'layouts/MainLayout'
import Home from 'pages/Home'

const App = () => {
	return (
		<BrowserRouter>
			<MainRoutes />
		</BrowserRouter>
	)
}

export default App

const MainRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	)
}
