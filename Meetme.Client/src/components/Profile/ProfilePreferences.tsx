import { PreferenceEntity } from "../../entities/Preference/PreferenceEntity";

interface ProfilePreferencesProps {
	preference: PreferenceEntity;
}

export default function ProfilePreferences({
	preference,
}: ProfilePreferencesProps) {
	return (
		<div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
			<h3 className="text-lg font-semibold">Preferences</h3>
			<p>Looking for: {preference.genderPreference}</p>
			<p>
				Age range: {preference.minAge} - {preference.maxAge}
			</p>
			<p>Distance Radius: {preference.distanceRadius} km</p>
		</div>
	);
}
