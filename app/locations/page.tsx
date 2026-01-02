import { Metadata } from 'next';
import { locations } from '@/lib/locations';
import LocationCard from '@/components/LocationCard';

export const metadata: Metadata = {
  title: 'Service Areas | Plumber Sydney | Sydney Elite Plumbing',
  description: 'Sydney Elite Plumbing serves all Sydney suburbs with professional plumbing services. Find your local plumber. Available 24/7 for emergencies.',
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Areas</h1>
          <p className="text-xl text-primary-100">Professional plumbing services across all Sydney suburbs</p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicing All of Sydney</h2>
            <p className="text-xl text-gray-600">
              From the CBD to the outer suburbs, our licensed plumbers are ready to help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map(location => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sydney-Wide Coverage</h2>
          <p className="text-gray-600 mb-8">
            Sydney Elite Plumbing proudly serves the entire Sydney metropolitan area. No matter where you're located, our experienced plumbers can reach you quickly with fully equipped service vehicles ready to handle any plumbing challenge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-3">Fast Response Times</h3>
              <p className="text-gray-600">
                We maintain service vehicles strategically positioned across Sydney to ensure rapid response times. For emergencies, we typically arrive within 60 minutes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                Our plumbers know Sydney's unique plumbing challenges, from older homes in the inner suburbs to new developments in growth areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find Your Suburb?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            We service all Sydney areas. Call us to confirm coverage for your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300PLUMBER" className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
              Call 1300 PLUMBER
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
