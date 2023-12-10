import { Spacing } from '@components/base'

const Home = () => {
	return (
		<section>
			<Spacing size={80} />
			<div className="flex flex-col items-center justify-center">
				<h1 className="font-medium">성진영</h1>
				<p className="text-sm">Frontend Developer</p>
			</div>
		</section>
	)
}

export default Home
