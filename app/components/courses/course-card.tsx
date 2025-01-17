interface CourseCardProps {
  course: {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
    rating: number;
    tutor: string;
  };
}

export default function CourseCard(props: CourseCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <img
        src={props.course.image}
        alt={props.course.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{props.course.title}</h3>
      <p className="text-gray-600 mb-2">Gia sư: {props.course.tutor}</p>
      <p className="text-gray-800 font-bold mb-2">
        {props.course.price.toLocaleString()} VND
      </p>
      <p className="text-yellow-500">Đánh giá: {props.course.rating} ⭐</p>
    </div>
  );
}
