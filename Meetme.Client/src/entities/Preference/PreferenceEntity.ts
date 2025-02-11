import { Gender } from "../Enums/Gender";

export interface PreferenceEntity {
	id: string;
	profileId: string;
	minAge: number;
	maxAge: number;
	genderPreference: Gender;
	distanceRadius: number;
	createdAt: string;
	updatedAt: string;
}
