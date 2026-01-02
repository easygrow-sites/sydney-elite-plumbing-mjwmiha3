import Link from 'next/link';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';

export default function Footer() {
  const topServices = services.slice(0, 6);
  const topLocations = locations.slice(0, 8);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sydney Elite Plumbing</h3>
            <p className="text-gray-400 mb-4">
              Professional plumbing services across Sydney. Available 24/7 for emergency repairs.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-semibold">Phone:</span> <a href="tel:1300PLUMBER" className="hover:text-primary-400">1300 PLUMBER</a>
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Email:</span> <a href="mailto:info@sydneyeliteplumbing.com.au" className="hover:text-primary-400">info@sydneyeliteplumbing.com.au</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary-400">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary-400">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400">Services</Link></li>
              <li><Link href="/locations" className="text-gray-400 hover:text-primary-400">Service Areas</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary-400">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {topServices.map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-gray-400 hover:text-primary-400">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {topLocations.map(location => (
                <li key={location.slug}>
                  <Link href={`/locations/${location.slug}`} className="text-gray-400 hover:text-primary-400">
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sydney Elite Plumbing. All rights reserved.</p>
          <p className="mt-2 text-sm">Licensed Plumbers | Fully Insured | 24/7 Emergency Service</p>
        </div>
      </div>
    </footer>
  );
}
