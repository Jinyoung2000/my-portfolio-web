import { BrowserRouter } from 'react-router-dom'

import MainRoutes from 'routes/MainRoutes'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const Router = () => {
	return (
		<BrowserRouter>
			<MainRoutes />
		</BrowserRouter>
	)
}

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	)
}

export default App
