import Link from 'next/link';

export default function Reservation() {
  return (
    <section className="bg-yellow-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Experience Little Lemon?
        </h2>
        <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
          Book your table now and enjoy authentic Mediterranean cuisine in the heart of Chicago.
        </p>
        <Link
          href="/reservations"
          className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
        >
          Book a Table
        </Link>
      </div>
    </section>
  );
}