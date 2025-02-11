import { Gender } from "../Enums/Gender";
import { PhotoEntity } from "../Photo/PhotoEntity";
import { PreferenceEntity } from "../Preference/PreferenceEntity";

export interface ProfileEntity {
	id: string;
	identityId: string;
	name: string;
	age: number;
	bio: string;
	gender: Gender;
	location: string;
	createdAt: string;
	updatedAt: string;
	preference: PreferenceEntity;
	photos: PhotoEntity[];
}
