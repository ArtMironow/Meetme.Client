import { Gender } from "../../entities/Enums/Gender";
import { ProfileEntity } from "../../entities/Profile/ProfileEntity";
import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import ProfilePreferences from "./ProfilePreferences";
import ProfilePhotos from "./ProfilePhotos";

const mockProfile: ProfileEntity = {
	id: "1234-5678-9012",
	identityId: "user-007",
	name: "Sigma Male",
	age: 26,
	bio: "popular, successful, but highly independent and self-reliant man.",
	gender: Gender.Male,
	location: "Poland",
	createdAt: new Date().toISOString(),
	updatedAt: new Date().toISOString(),
	preference: {
		id: "pref-007",
		profileId: "1234-5678-9012",
		minAge: 20,
		maxAge: 35,
		genderPreference: Gender.Female,
		distanceRadius: 50,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
	photos: [
		{
			id: "photo1",
			profileId: "12234-5678-9012",
			photoUrl: "https://picsum.photos/200/300",
			isProfilePicture: true,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		},
		{
			id: "photo2",
			profileId: "1234-5678-90122",
			photoUrl: "https://www.placebear.com/200/300",
			isProfilePicture: false,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		},
		{
			id: "photo3",
			profileId: "12734-5678-90122",
			photoUrl: "https://www.placebear.com/200/300",
			isProfilePicture: false,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		},
	],
};

export default function Profile() {
	const profile = mockProfile;

	return (
		<div className="flex justify-center items-start h-screen bg-gray-100 p-6">
			<div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl">
				<ProfileHeader profile={profile} />
				<ProfileDetails profile={profile} />
				<ProfilePreferences preference={profile.preference} />
				<ProfilePhotos photos={profile.photos} />
			</div>
		</div>
	);
}
