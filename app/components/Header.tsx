import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-yellow-600">
              Little Lemon
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-yellow-600 transition-colors">
              About
            </Link>
            <Link href="#menu" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Menu
            </Link>
            <Link href="/reservations" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Reservations
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-yellow-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}