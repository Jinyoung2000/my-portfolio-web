import { Route, Routes } from 'react-router-dom'

import MainLayout from 'layouts/MainLayout'
import HomePage from 'pages/HomePage'

import PostPage from '@/pages/PostPage'

const MainRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="" element={<HomePage />} />
				<Route path="posts">
					<Route path="" element={<PostPage.List />} />
					<Route path="new" element={<PostPage.New />} />
					<Route path=":postId" element={<PostPage.Detail />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default MainRoutes
