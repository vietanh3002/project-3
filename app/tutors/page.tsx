"use client";

import React, { useState } from "react";

const Tutors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  // Dữ liệu mẫu của các gia sư
  const tutors = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      category: "Công nghệ thông tin",
      rating: 4.8,
      image: "https://via.placeholder.com/400",
      bio: "Chuyên gia về lập trình React với 5 năm kinh nghiệm.",
    },
    {
      id: 2,
      name: "Trần Thị B",
      category: "Ngôn ngữ",
      rating: 4.7,
      image: "https://via.placeholder.com/400",
      bio: "Giảng viên tiếng Anh với hơn 10 năm kinh nghiệm giảng dạy.",
    },
    {
      id: 3,
      name: "Lê Văn C",
      category: "Khoa học",
      rating: 4.6,
      image: "https://via.placeholder.com/400",
      bio: "Thạc sĩ Toán học với nhiều thành tích trong nghiên cứu và giảng dạy.",
    },
  ];

  // Logic lọc gia sư
  const filteredTutors = tutors.filter((tutor) => {
    return (
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? tutor.category === selectedCategory : true) &&
      (selectedRating
        ? (selectedRating === "4.5" && tutor.rating >= 4.5) ||
          (selectedRating === "4.0" &&
            tutor.rating >= 4.0 &&
            tutor.rating < 4.5)
        : true)
    );
  });

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Gia Sư</h1>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        {/* Tìm kiếm */}
        <input
          type="text"
          placeholder="Tìm kiếm gia sư..."
          className="border border-gray-300 p-2 rounded w-full mb-4 sm:mb-0 sm:mr-4 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Lọc theo lĩnh vực */}
        <select
          className="border border-gray-300 p-2 rounded mb-4 sm:mb-0 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Tất cả lĩnh vực</option>
          <option value="Công nghệ thông tin">Công nghệ thông tin</option>
          <option value="Ngôn ngữ">Ngôn ngữ</option>
          <option value="Khoa học">Khoa học</option>
        </select>

        {/* Lọc theo đánh giá */}
        <select
          className="border border-gray-300 p-2 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
        >
          <option value="">Tất cả đánh giá</option>
          <option value="4.5">Từ 4.5 ⭐ trở lên</option>
          <option value="4.0">Từ 4.0 ⭐ trở lên</option>
        </select>
      </div>

      {/* Danh sách gia sư */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))
        ) : (
          <p className="text-center text-gray-600">
            Không tìm thấy gia sư phù hợp.
          </p>
        )}
      </div>
    </div>
  );
};

export default Tutors;

function TutorCard({
  tutor,
}: {
  tutor: {
    id: number;
    name: string;
    category: string;
    rating: number;
    image: string;
    bio: string;
  };
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <img
        src={tutor.image}
        alt={tutor.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{tutor.name}</h3>
      <p className="text-gray-600 mb-2">{tutor.bio}</p>
      <p className="text-gray-800 font-bold mb-2">Lĩnh vực: {tutor.category}</p>
      <p className="text-yellow-500">Đánh giá: {tutor.rating} ⭐</p>
    </div>
  );
}
