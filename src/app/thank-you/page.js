import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="bg-white rounded-xl p-5 shadow-2xl h-fit mt-20">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-6">
          Your submission has been received successfully.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to home
        </Link>
      </div>
    </div>
  );
}
