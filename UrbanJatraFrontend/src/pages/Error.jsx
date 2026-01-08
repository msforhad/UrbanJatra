import { Link } from "react-router"

function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100    text-center px-4">
      <h1 className="text-7xl font-extrabold text-red-500">404</h1>
      <p className="text-xl mt-4 text-gray-700">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-300"
      >
        Back to Urban Jatra Home
      </Link>
    </div>
  )
}

export default Error