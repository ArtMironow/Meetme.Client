import { ProfileEntity } from "../../entities/Profile/ProfileEntity";

interface ProfileHeaderProps {
	profile: ProfileEntity;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
	const profilePicture = profile.photos.find(
		(photo) => photo.isProfilePicture
	)?.photoUrl;

	return (
		<div className="flex items-center gap-6">
			<img
				src={profilePicture}
				alt="Profile"
				className="w-32 h-32 object-cover rounded-lg border-4 border-gray-300 shadow-lg"
			/>
			<div>
				<h2 className="text-3xl font-bold">
					{profile.name}, {profile.age}
				</h2>
				<p className="text-gray-600">{profile.location}</p>
			</div>
		</div>
	);
}
