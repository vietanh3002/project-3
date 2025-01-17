"use client";

import React, { useState } from "react";

interface Course {
  id: number;
  authorId: number;
  type: string;
  title: string;
  videoIntro: string;
  thumbnail: string;
  maximumQuantity: number;
  pricePer: number;
  description: string;
  otherInfo: string;
  status: string;
  totalRate: number;
  createdAt: Date;
  updatedAt: Date;
}

const tutorCoursesData: Course[] = [
  {
    id: 1,
    authorId: 1,
    type: "online",
    title: "Online Math Tutoring",
    videoIntro: "https://example.com/intro1.mp4",
    thumbnail: "https://via.placeholder.com/150",
    maximumQuantity: 10,
    pricePer: 20,
    description: "An online math tutoring session to improve your skills.",
    otherInfo: "Available for all levels.",
    status: "published",
    totalRate: 4.5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    authorId: 2,
    type: "offline",
    title: "Physics Tutoring - Offline",
    videoIntro: "https://example.com/intro2.mp4",
    thumbnail: "https://via.placeholder.com/150",
    maximumQuantity: 8,
    pricePer: 25,
    description:
      "An offline physics tutoring session for high school students.",
    otherInfo: "Location: XYZ Learning Center.",
    status: "published",
    totalRate: 4.8,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Thêm nhiều dữ liệu khóa học khác ở đây...
];

function TutorCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredCourses = tutorCoursesData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || course.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Khóa Học Gia Sư</h1>

      {/* Tìm kiếm và bộ lọc */}
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-full mb-4 sm:mb-0 sm:mr-4 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tìm kiếm khóa học..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border border-gray-300 p-2 rounded mb-4 sm:mb-0 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">Tất cả</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      {/* Hiển thị danh sách khóa học */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

function CourseItem({ course }: { course: Course }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover transition duration-300 transform hover:scale-110"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{course.title}</h2>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <p className="text-gray-900 font-bold">Giá: ${course.pricePer}/giờ</p>
        <p className="text-gray-600">
          Loại: {course.type === "online" ? "Online" : "Offline"}
        </p>
        <p className="text-gray-600">
          Số lượng tối đa: {course.maximumQuantity}
        </p>
        <p className="text-yellow-500 font-bold">
          Đánh giá: {course.totalRate} ★
        </p>
        <a
          href={course.videoIntro}
          className="block text-blue-600 mt-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xem video giới thiệu
        </a>
      </div>
    </div>
  );
}

export default TutorCoursesPage;
