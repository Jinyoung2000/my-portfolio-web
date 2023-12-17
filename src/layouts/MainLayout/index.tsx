import { Outlet } from 'react-router-dom'

import { Spacing } from '@components/base'
import { Flex } from '@components/utils'
import AppBar from 'layouts/MainLayout/components/AppBar'

const MainLayout = () => {
	return (
		<main>
			<AppBar />
			<Flex justify="center">
				<div className="px-[10%]">
					<Spacing size={80} />
					<Outlet />
				</div>
			</Flex>
		</main>
	)
}

export default MainLayout
