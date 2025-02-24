import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-70 p-4 text-center w-full">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © 2025 Team CRESA. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link
            href="#"
            className="text-sm text-gray-400 hover:text-red-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-400 hover:text-red-400 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
