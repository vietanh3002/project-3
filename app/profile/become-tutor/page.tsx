/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";

function BecomeTutor() {
  const [tutorInfo, setTutorInfo] = useState({
    title: "",
    expertise: "",
    experience: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Xử lý form xin quyền trở thành tutor
    // fetch('/api/tutor/apply', { method: 'POST', body: JSON.stringify(tutorInfo) });
    alert("Yêu cầu của bạn đã được gửi.");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Xin Quyền Trở Thành Gia Sư</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-bold">Tên Khóa Học Dự Kiến</label>
          <input
            type="text"
            value={tutorInfo.title}
            onChange={(e) =>
              setTutorInfo({ ...tutorInfo, title: e.target.value })
            }
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-bold">Chuyên Môn</label>
          <input
            type="text"
            value={tutorInfo.expertise}
            onChange={(e) =>
              setTutorInfo({ ...tutorInfo, expertise: e.target.value })
            }
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-bold">Kinh Nghiệm</label>
          <textarea
            value={tutorInfo.experience}
            onChange={(e) =>
              setTutorInfo({ ...tutorInfo, experience: e.target.value })
            }
            className="border rounded-lg p-2 w-full"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Gửi Yêu Cầu
        </button>
      </form>
    </div>
  );
}

export default BecomeTutor;
