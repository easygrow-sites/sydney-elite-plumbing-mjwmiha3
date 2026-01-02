import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import ServiceCard from '@/components/ServiceCard';

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredLocations = locations.slice(0, 8);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-32 min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1920&q=80"
            alt="Professional plumber working on pipes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Sydney's Most Trusted Plumbing Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              24/7 Emergency Response | Licensed & Insured | Fast & Reliable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1300PLUMBER" className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition shadow-xl">
                Call Now: 1300 PLUMBER
              </a>
              <Link href="/contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition border-2 border-orange-400 shadow-xl">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-4 bg-gray-100">
        <div className="flex overflow-hidden gap-2">
          <Image src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=250&fit=crop" alt="Pipe wrench and tools" width={400} height={250} className="object-cover rounded" />
          <Image src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=250&fit=crop" alt="Drain repair work" width={400} height={250} className="object-cover rounded" />
          <Image src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop" alt="Pipe inspection" width={400} height={250} className="object-cover rounded" />
          <Image src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=250&fit=crop" alt="Hot water system" width={400} height={250} className="object-cover rounded" />
          <Image src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=250&fit=crop" alt="Modern tap fixture" width={400} height={250} className="object-cover rounded" />
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Plumbing Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional solutions for all your plumbing needs across Sydney
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas Across Sydney
            </h2>
            <p className="text-xl text-gray-600">
              Providing expert plumbing services to homes and businesses throughout Sydney
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {featuredLocations.map(location => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <span className="text-2xl mb-2 block">📍</span>
                <span className="text-gray-900 font-semibold">{location.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/locations" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sydney Elite Plumbing?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-gray-600">Emergency plumber available 24/7 with rapid response times across all Sydney suburbs.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed plumbers with comprehensive insurance for your peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Upfront Pricing</h3>
              <p className="text-gray-600">Transparent quotes with no hidden fees. You'll know the cost before we start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Plumber Right Now?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Our emergency plumbers are standing by 24/7 to help with any plumbing crisis.
          </p>
          <a href="tel:1300PLUMBER" className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
            Call 1300 PLUMBER - Available Now
          </a>
        </div>
      </section>
    </>
  );
}
