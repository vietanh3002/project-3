import Link from "next/link";

interface TutorCardProps {
  tutor: {
    id: number;
    name: string;
    category: string;
    rating: number;
    image: string;
    bio: string;
  };
}

export default function TutorCard(props: TutorCardProps) {
  return (
    <Link
      href={`/tutors/${props.tutor.id}`}
      className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
    >
      <img
        src={props.tutor.image}
        alt={props.tutor.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{props.tutor.name}</h3>
      <p className="text-gray-600 mb-2">{props.tutor.bio}</p>
      <p className="text-gray-800 font-bold mb-2">
        Lĩnh vực: {props.tutor.category}
      </p>
      <p className="text-yellow-500">Đánh giá: {props.tutor.rating} ⭐</p>
    </Link>
  );
}
