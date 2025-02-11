import { PhotoEntity } from "../../entities/Photo/PhotoEntity";

interface ProfilePhotosProps {
	photos: PhotoEntity[];
}

export default function ProfilePhotos({ photos }: ProfilePhotosProps) {
	const nonProfilePhotos = photos.filter((photo) => !photo.isProfilePicture);

	return (
		<div className="mt-6">
			<h3 className="text-xl font-semibold mb-3">Gallery</h3>
			<div className="flex gap-4 overflow-x-auto">
				{nonProfilePhotos.map((photo) => (
					<img
						key={photo.id}
						src={photo.photoUrl}
						alt="Gallery"
						className="w-32 h-32 object-cover rounded-lg border border-gray-300"
					/>
				))}
			</div>
		</div>
	);
}
