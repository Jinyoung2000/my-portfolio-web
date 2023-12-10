import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from 'pages/Home'
import MainLayout from 'layouts/MainLayout'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
