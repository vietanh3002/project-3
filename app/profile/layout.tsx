import Link from "next/link";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto flex py-12 w-screen">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/4 bg-gray-200 p-4 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
            Profile
          </h1>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/profile"
              className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Thông tin cá nhân
            </Link>
            <Link
              href="/profile/become-tutor"
              className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Xin Quyền Làm Gia Sư
            </Link>
            <Link
              href="/profile/manage-courses"
              className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Quản Lý Khóa Học
            </Link>
            <Link
              href="/profile/manage-tutor-courses"
              className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Quản Lý Khóa Gia Sư
            </Link>
          </nav>
        </div>
        <div className="flex-grow bg-white shadow-md rounded-lg p-6 ml-0 md:ml-4">
          {children}
        </div>
      </div>
    </div>
  );
}
