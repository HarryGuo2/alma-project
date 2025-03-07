import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16">
            <Image
              src="/document-icon.svg"
              alt="Document"
              width={64}
              height={64}
              className="w-full h-full opacity-70"
            />
          </div>
        </div>
        <h1 className="text-2xl font-medium text-gray-900 mb-4">
          Thank You
        </h1>
        <p className="text-gray-600 mb-8">
          Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai
        </p>
        <Link
          href="/"
          className="inline-block w-full bg-black text-white py-4 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-medium"
        >
          Go Back to Homepage
        </Link>
      </div>
    </main>
  );
} 