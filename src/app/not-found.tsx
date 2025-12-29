import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
            <div className="text-center px-4">
                <h1 className="text-9xl font-bold text-primary-600">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
                <p className="text-gray-600 mt-2 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
