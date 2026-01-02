import { Metadata } from 'next';
import Link from 'next/link';
import { services, getService, getAllServiceSlugs } from '@/lib/services';
import { locations, getLocation, getAllLocationSlugs } from '@/lib/locations';

export async function generateStaticParams() {
  const params = [];
  for (const serviceSlug of getAllServiceSlugs()) {
    for (const locationSlug of getAllLocationSlugs()) {
      params.push({
        service: serviceSlug,
        location: locationSlug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { service: string; location: string } }): Promise<Metadata> {
  const service = getService(params.service);
  const location = getLocation(params.location);

  if (!service || !location) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} in ${location.name} - 24/7 Fast Response | Sydney Elite Plumbing`,
    description: `Professional ${service.name.toLowerCase()} in ${location.name}. Fast, reliable service from licensed plumbers. Available 24/7 for emergencies. Call 1300 PLUMBER now for ${service.name.toLowerCase()} in ${location.name}.`,
    keywords: `${service.name.toLowerCase()} ${location.name.toLowerCase()}, ${location.name.toLowerCase()} ${service.name.toLowerCase()}, best ${service.name.toLowerCase()} in ${location.name}, ${service.slug} ${location.slug}`,
  };
}

export default function ServiceLocationPage({ params }: { params: { service: string; location: string } }) {
  const service = getService(params.service);
  const location = getLocation(params.location);

  if (!service || !location) {
    return <div>Service or location not found</div>;
  }

  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 4);
  const nearbyLocations = locations.filter(l => l.slug !== location.slug).slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4">{service.icon}</span>
            <h1 className="text-3xl md:text-5xl font-bold">
              Professional {service.name} in {location.name}
            </h1>
          </div>
          <p className="text-xl text-primary-100 mb-6">
            Fast, Reliable {service.name} Services | Licensed Plumbers | Available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:1300PLUMBER" className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition text-center">
              Call Now: 1300 PLUMBER
            </a>
            <Link href="/contact" className="bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-primary-800 transition border-2 border-white text-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">&lt;60min</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
              <div className="text-gray-600 text-sm">Guaranteed Work</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">Licensed</div>
              <div className="text-gray-600 text-sm">& Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Expert {service.name} Services in {location.name}
                </h2>

                <p className="text-gray-600 mb-4">
                  When you need {service.name.toLowerCase()} in {location.name}, Sydney Elite Plumbing is your trusted local choice. We've been providing professional {service.name.toLowerCase()} services to {location.name} residents and businesses for over 15 years, building a reputation for quality workmanship, honest pricing, and exceptional customer service.
                </p>

                <p className="text-gray-600 mb-4">
                  Our team of licensed plumbers understands that {service.name.toLowerCase()} issues can be urgent and stressful. That's why we're committed to providing fast response times to {location.name}, with most jobs completed the same day. Whether you're dealing with an emergency or need scheduled {service.name.toLowerCase()} work, we have the experience and equipment to get the job done right the first time.
                </p>

                <p className="text-gray-600 mb-6">
                  As your local {location.name} {service.name.toLowerCase()} specialists, we take pride in being part of the community. We know the area well and are committed to providing reliable, professional service to our neighbors in {location.name}.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Why Choose Us for {service.name} in {location.name}?
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Local {location.name} Plumbers:</strong> Fast response times with fully equipped vehicles serving {location.name} and surrounding areas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-600">
                      <strong className="text-gray-900">24/7 Emergency Service:</strong> Available around the clock for urgent {service.name.toLowerCase()} issues in {location.name}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Licensed & Experienced:</strong> Fully qualified plumbers with extensive experience in {service.name.toLowerCase()}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Upfront Pricing:</strong> Transparent quotes for {service.name.toLowerCase()} work with no hidden charges
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Work Guaranteed:</strong> 100% satisfaction guarantee on all {service.name.toLowerCase()} services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Same Day Service:</strong> Most {service.name.toLowerCase()} jobs in {location.name} completed same day
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our {service.name} Process in {location.name}
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</span>
                      <div>
                        <strong className="text-gray-900">Call Us:</strong>
                        <p className="text-gray-600">Contact our team to discuss your {service.name.toLowerCase()} needs in {location.name}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</span>
                      <div>
                        <strong className="text-gray-900">Quick Arrival:</strong>
                        <p className="text-gray-600">Our licensed plumber arrives at your {location.name} property promptly</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</span>
                      <div>
                        <strong className="text-gray-900">Assessment:</strong>
                        <p className="text-gray-600">We thoroughly assess the {service.name.toLowerCase()} issue and explain our findings</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</span>
                      <div>
                        <strong className="text-gray-900">Upfront Quote:</strong>
                        <p className="text-gray-600">Receive a clear, transparent quote before any {service.name.toLowerCase()} work begins</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">5</span>
                      <div>
                        <strong className="text-gray-900">Expert Work:</strong>
                        <p className="text-gray-600">We complete the {service.name.toLowerCase()} job efficiently to the highest standards</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">6</span>
                      <div>
                        <strong className="text-gray-900">Clean & Guaranteed:</strong>
                        <p className="text-gray-600">Site cleaned up and work guaranteed for your peace of mind</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8">
                  <h4 className="font-bold text-gray-900 mb-2">Need Emergency {service.name} in {location.name}?</h4>
                  <p className="text-gray-700 mb-3">
                    We're available 24/7 for emergency {service.name.toLowerCase()} in {location.name}. Don't wait - call us now for immediate assistance.
                  </p>
                  <a href="tel:1300PLUMBER" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition">
                    Call 1300 PLUMBER Now
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Common {service.name} Issues in {location.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  Our {location.name} plumbers frequently help local residents with these {service.name.toLowerCase()} challenges:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-600">Emergency {service.name.toLowerCase()} repairs</span>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-600">Scheduled {service.name.toLowerCase()} maintenance</span>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-600">New {service.name.toLowerCase()} installations</span>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-600">{service.name} replacements and upgrades</span>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-600">Preventative {service.name.toLowerCase()} inspections</span>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-600">Commercial {service.name.toLowerCase()} services</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Frequently Asked Questions - {service.name} {location.name}
                </h3>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      How quickly can you get to {location.name} for {service.name.toLowerCase()}?
                    </h4>
                    <p className="text-gray-600">
                      We typically arrive within 60 minutes for emergency {service.name.toLowerCase()} calls to {location.name}. For non-emergency work, we can usually schedule same-day or next-day service.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      What areas near {location.name} do you serve for {service.name.toLowerCase()}?
                    </h4>
                    <p className="text-gray-600">
                      We service all of {location.name} and surrounding Sydney suburbs. Our mobile team covers the entire Sydney metropolitan area with fast response times.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Do you provide free quotes for {service.name.toLowerCase()} in {location.name}?
                    </h4>
                    <p className="text-gray-600">
                      Yes! We provide free, no-obligation quotes for all {service.name.toLowerCase()} work. Our plumber will assess your needs and provide transparent pricing before starting any work.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Are your {location.name} plumbers licensed for {service.name.toLowerCase()}?
                    </h4>
                    <p className="text-gray-600">
                      Absolutely. All our plumbers are fully licensed with NSW Fair Trading, carry comprehensive insurance, and have extensive experience with {service.name.toLowerCase()}.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      What payment methods do you accept for {service.name.toLowerCase()} services?
                    </h4>
                    <p className="text-gray-600">
                      We accept cash, credit cards, debit cards, and bank transfers. Payment is due upon completion of the {service.name.toLowerCase()} work.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Box */}
              <div className="bg-primary-600 text-white p-6 rounded-lg shadow-lg mb-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">
                  Get {service.name} in {location.name}
                </h3>
                <p className="mb-6">Fast, professional service from licensed plumbers.</p>
                <a href="tel:1300PLUMBER" className="block w-full bg-white text-primary-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition mb-3">
                  Call 1300 PLUMBER
                </a>
                <Link href="/contact" className="block w-full bg-primary-700 text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-primary-800 transition border-2 border-white">
                  Get Free Quote
                </Link>
                <div className="mt-6 pt-6 border-t border-primary-400">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Same Day Service
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> 24/7 Emergency
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Licensed Plumbers
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Upfront Pricing
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Work Guaranteed
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service Info */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Service Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-gray-900">Service:</strong>
                    <p className="text-gray-600">{service.name}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Location:</strong>
                    <p className="text-gray-600">{location.name}, Sydney</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Availability:</strong>
                    <p className="text-gray-600">24/7 Emergency Service</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Response Time:</strong>
                    <p className="text-gray-600">Within 60 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Other Services in {location.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map(s => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}-in-${location.slug}`}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
                >
                  <span className="text-4xl mb-3 block">{s.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{s.name}</h3>
                  <span className="text-primary-600 text-sm font-semibold">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nearby Locations */}
      {nearbyLocations.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {service.name} in Nearby Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyLocations.map(l => (
                <Link
                  key={l.slug}
                  href={`/${service.slug}-in-${l.slug}`}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center"
                >
                  <span className="text-2xl mb-2 block">📍</span>
                  <span className="text-gray-900 font-medium text-sm">{service.name} in {l.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Professional {service.name} in {location.name}?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Call now for same-day service or emergency assistance. Our licensed plumbers are standing by.
          </p>
          <a href="tel:1300PLUMBER" className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
            Call 1300 PLUMBER - Available 24/7
          </a>
        </div>
      </section>
    </>
  );
}
