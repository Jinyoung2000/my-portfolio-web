const Profile = ({ name, job }: { name: string; job: string }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="font-medium mb-2">{name}</h1>
			<p className="text-sm">{job}</p>
		</div>
	)
}

export default Profile
