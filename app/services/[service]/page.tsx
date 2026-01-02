import { Metadata } from 'next';
import Link from 'next/link';
import { services, getService, getAllServiceSlugs } from '@/lib/services';
import { locations } from '@/lib/locations';

export async function generateStaticParams() {
  return getAllServiceSlugs().map(slug => ({ service: slug }));
}

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = getService(params.service);
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return {
    title: `${service.name} Sydney | Sydney Elite Plumbing`,
    description: `Professional ${service.name.toLowerCase()} services across Sydney. ${service.description} Available 24/7. Call 1300 PLUMBER for fast response.`,
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = getService(params.service);

  if (!service) {
    return <div>Service not found</div>;
  }

  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 3);
  const featuredLocations = locations.slice(0, 12);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4">{service.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold">{service.name} Sydney</h1>
          </div>
          <p className="text-xl text-primary-100">Professional {service.name.toLowerCase()} services across Sydney | Available 24/7</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert {service.name} Services</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <p className="text-gray-600 mb-6">
                  At Sydney Elite Plumbing, we understand the importance of reliable {service.name.toLowerCase()} solutions. Our team of licensed, experienced plumbers has been serving Sydney homes and businesses for over 15 years, delivering quality workmanship and exceptional customer service on every job.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us for {service.name}?</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span className="text-gray-600"><strong>Licensed & Insured:</strong> All our plumbers are fully licensed and carry comprehensive insurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span className="text-gray-600"><strong>Fast Response:</strong> We provide quick response times across all Sydney suburbs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span className="text-gray-600"><strong>Upfront Pricing:</strong> Transparent quotes with no hidden fees or surprises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span className="text-gray-600"><strong>Quality Workmanship:</strong> We use premium materials and proven techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span className="text-gray-600"><strong>Satisfaction Guaranteed:</strong> 100% satisfaction guarantee on all work</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our {service.name} Process</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <div>
                        <strong className="text-gray-900">Contact Us:</strong>
                        <p className="text-gray-600">Call us or fill out our online form to describe your plumbing needs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <div>
                        <strong className="text-gray-900">Assessment:</strong>
                        <p className="text-gray-600">Our licensed plumber arrives promptly to assess the situation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <div>
                        <strong className="text-gray-900">Quote:</strong>
                        <p className="text-gray-600">We provide an upfront, transparent quote before starting any work</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <div>
                        <strong className="text-gray-900">Expert Service:</strong>
                        <p className="text-gray-600">Upon approval, we complete the work efficiently to the highest standards</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                      <div>
                        <strong className="text-gray-900">Follow-Up:</strong>
                        <p className="text-gray-600">We ensure you're completely satisfied and provide maintenance tips</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">How quickly can you respond?</h4>
                    <p className="text-gray-600">We offer same-day service for most non-emergency jobs and typically arrive within 60 minutes for emergency calls across Sydney.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Do you provide warranties?</h4>
                    <p className="text-gray-600">Yes, all our work comes with a comprehensive warranty. We also offer manufacturer warranties on all parts and equipment we install.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">What are your service hours?</h4>
                    <p className="text-gray-600">We operate 24/7 for emergency services. Regular business hours are Monday to Friday 7am-6pm, Saturday 8am-4pm.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Do you offer free quotes?</h4>
                    <p className="text-gray-600">Yes, we provide free, no-obligation quotes for all services. Our plumber will assess your needs and provide transparent pricing before any work begins.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Are your plumbers licensed?</h4>
                    <p className="text-gray-600">Absolutely. All our plumbers are fully licensed, insured, and undergo regular training to stay current with industry standards.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Box */}
              <div className="bg-primary-600 text-white p-6 rounded-lg shadow-lg mb-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Need {service.name}?</h3>
                <p className="mb-6">Get fast, professional service from Sydney's trusted plumbers.</p>
                <a href="tel:1300PLUMBER" className="block w-full bg-white text-primary-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition mb-3">
                  Call 1300 PLUMBER
                </a>
                <Link href="/contact" className="block w-full bg-primary-700 text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-primary-800 transition border-2 border-white">
                  Get Free Quote
                </Link>
                <div className="mt-6 pt-6 border-t border-primary-400">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> 24/7 Emergency Service
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Same Day Service
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Licensed & Insured
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Upfront Pricing
                    </li>
                  </ul>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    {relatedServices.map(s => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="flex items-center text-primary-600 hover:text-primary-700">
                          <span className="mr-2">{s.icon}</span>
                          <span className="font-medium">{s.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {service.name} Available Across Sydney
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredLocations.map(location => (
              <Link
                key={location.slug}
                href={`/${service.slug}-in-${location.slug}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <span className="text-gray-900 font-medium">{service.name} in {location.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="text-primary-600 hover:text-primary-700 font-semibold">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
