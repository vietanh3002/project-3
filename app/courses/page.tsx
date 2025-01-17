"use client";

import React, { useState } from "react";
import CourseCard from "../components/courses/course-card";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  // Dummy data for courses
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

  // Filter logic
  const filteredCourses = courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? course.category === selectedCategory : true) &&
      (selectedPriceRange
        ? (selectedPriceRange === "low" && course.price <= 600000) ||
          (selectedPriceRange === "high" && course.price > 600000)
        : true)
    );
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Danh sách Khóa Học
      </h1>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Tìm kiếm khóa học..."
          className="border border-gray-300 p-3 rounded-lg w-full mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter by category */}
        <select
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Tất cả danh mục</option>
          <option value="Công nghệ thông tin">Công nghệ thông tin</option>
          <option value="Ngôn ngữ">Ngôn ngữ</option>
          <option value="Khoa học">Khoa học</option>
        </select>

        {/* Filter by price */}
        <select
          className="border border-gray-300 p-3 rounded-lg ml-0 sm:ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
        >
          <option value="">Tất cả mức giá</option>
          <option value="low">Dưới 600,000 VND</option>
          <option value="high">Trên 600,000 VND</option>
        </select>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-center text-gray-600">
            Không tìm thấy khóa học phù hợp.
          </p>
        )}
      </div>
    </div>
  );
};

export default Courses;
