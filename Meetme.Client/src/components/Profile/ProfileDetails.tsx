import { ProfileEntity } from "../../entities/Profile/ProfileEntity";

interface ProfileDetailsProps {
	profile: ProfileEntity;
}

export default function ProfileDetails({ profile }: ProfileDetailsProps) {
	return (
		<div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
			<h3 className="text-lg font-semibold">About Me</h3>
			<p className="text-gray-800">{profile.bio}</p>
			<p className="text-gray-800">Gender: {profile.gender}</p>
		</div>
	);
}
