import { forwardRef } from 'react'

import Section from '@components/Section'
import { Separated, Spacing } from '@components/base'

import type { CareerItem } from 'remotes/models/Career'

const Career = forwardRef<HTMLElement, { careers: CareerItem[] }>(({ careers }, ref) => {
	return (
		<Section ref={ref}>
			<Section.Title>Career</Section.Title>
			<Section.Content>
				<Separated separator={<Spacing size={40} />}>
					{careers.map((career) => (
						<CareerInfo key={career.id} career={career} />
					))}
				</Separated>
			</Section.Content>
		</Section>
	)
})

export default Career

const CareerInfo = ({ career }: { career: CareerItem }) => {
	return (
		<div key={career.id}>
			<p
				className="font-bold text-lg underline cursor-pointer w-fit"
				onClick={() => {
					if (career.company.site != null) {
						window.open(career.company.site)
					}
				}}>
				{career.company.name}
			</p>
			<p className="font-semibold">{career.job}</p>
			<p className="font-semibold">
				{career.range.start} ~ {career.range.end ?? '재직'}
			</p>
			<Spacing size={10} />
			<ul className="list-disc list-inside">
				{career.descriptions.map((description) => (
					<li key={description}>{description}</li>
				))}
			</ul>
		</div>
	)
}
