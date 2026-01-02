import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Sydney Elite Plumbing</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium">Services</Link>
            <Link href="/locations" className="text-gray-700 hover:text-primary-600 font-medium">Locations</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">About</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:1300PLUMBER" className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition">
              Call Now: 1300 PLUMBER
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <nav className="md:hidden pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-primary-600 font-medium py-2">Home</Link>
          <Link href="/services" className="block text-gray-700 hover:text-primary-600 font-medium py-2">Services</Link>
          <Link href="/locations" className="block text-gray-700 hover:text-primary-600 font-medium py-2">Locations</Link>
          <Link href="/about" className="block text-gray-700 hover:text-primary-600 font-medium py-2">About</Link>
          <Link href="/blog" className="block text-gray-700 hover:text-primary-600 font-medium py-2">Blog</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-primary-600 font-medium py-2">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
