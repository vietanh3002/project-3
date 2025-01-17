"use client";

import Link from "next/link";
import CourseCard from "./components/courses/course-card";
import TutorCard from "./components/tutors/tutor-card";

const courses = [
  {
    id: 1,
    title: "Lập trình React",
    category: "Công nghệ thông tin",
    price: 500000,
    image: "https://via.placeholder.com/400",
    rating: 4.8,
    tutor: "Nguyễn Văn A",
  },
  {
    id: 2,
    title: "Tiếng Anh giao tiếp",
    category: "Ngôn ngữ",
    price: 700000,
    image: "https://via.placeholder.com/400",
    rating: 4.7,
    tutor: "Trần Thị B",
  },
  {
    id: 3,
    title: "Toán cao cấp",
    category: "Khoa học",
    price: 600000,
    image: "https://via.placeholder.com/400",
    rating: 4.6,
    tutor: "Lê Văn C",
  },
];

export default function Home() {
  return (
    <div className="">
      <section className="bg-blue-600 text-white py-20 shadow-lg rounded-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4 transition-transform transform hover:scale-105">
            Tìm Khóa Học và Gia Sư Phù Hợp Nhất Cho Bạn
          </h1>
          <p className="text-lg mb-8 leading-relaxed">
            Học trực tuyến với các khóa học chất lượng từ các gia sư hàng đầu.
            Đăng ký ngay để khám phá hành trình học tập của bạn.
          </p>
          <div>
            <Link
              href="/courses"
              className="px-8 py-4 bg-white text-blue-600 rounded-full mr-4 hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Tìm Khóa Học
            </Link>
            <Link
              href="/tutors"
              className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Tìm Gia Sư
            </Link>
          </div>
        </div>
      </section>

      {/* Khóa học nổi bật */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Khóa Học Nổi Bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.length > 0 &&
              courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </div>
      </section>

      {/* Gia sư nổi bật */}
      <section className="py-16 bg-gray-100 rounded-lg shadow-md">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Gia Sư Nổi Bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <TutorCard tutor={{
              image:"https://via.placeholder.com/400",
              name:"Nguyễn Văn A",
              subject:"Lập trình React",
              rating:"4.8",
            }}
            />
            <TutorCard
            tutor={{
              image:"https://via.placeholder.com/400",
              name:"Trần Thị B",
              subject:"Tiếng Anh Giao Tiếp",
              rating:"4.7",
            }}
            />
            <TutorCard
            tutor={{
              image:"https://via.placeholder.com/400",
              name:"Lê Văn C",
              subject:"Toán Cao Cấp",
              rating:"4.6",
            }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2024 CourseTutor. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
