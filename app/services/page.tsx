import { Metadata } from 'next';
import { services } from '@/lib/services';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plumbing Services Sydney | Sydney Elite Plumbing',
  description: 'Complete range of professional plumbing services in Sydney. Emergency plumbing, blocked drains, hot water systems, leak detection and more. Available 24/7.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Plumbing Services</h1>
          <p className="text-xl text-primary-100">Professional solutions for all your plumbing needs across Sydney</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Plumbing Solutions</h2>
            <p className="text-xl text-gray-600">
              From emergency repairs to new installations, our licensed plumbers handle it all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">Quick arrival times across all Sydney areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Work</h3>
              <p className="text-gray-600 text-sm">Highly skilled licensed plumbers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600 text-sm">Transparent quotes with no hidden fees</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900 mb-2">Guaranteed</h3>
              <p className="text-gray-600 text-sm">100% satisfaction guarantee on all work</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today for a free quote or emergency plumbing service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300PLUMBER" className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
              Call 1300 PLUMBER
            </a>
            <Link href="/contact" className="bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-primary-800 transition border-2 border-white">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
