import { Metadata } from 'next';
import Link from 'next/link';
import { locations, getLocation, getAllLocationSlugs } from '@/lib/locations';
import { services } from '@/lib/services';

export async function generateStaticParams() {
  return getAllLocationSlugs().map(slug => ({ location: slug }));
}

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const location = getLocation(params.location);
  if (!location) {
    return { title: 'Location Not Found' };
  }
  return {
    title: `Plumber ${location.name} | 24/7 Emergency Plumber | Sydney Elite Plumbing`,
    description: `Professional plumber in ${location.name}. Fast, reliable plumbing services available 24/7. Licensed plumbers for all your plumbing needs in ${location.name}. Call 1300 PLUMBER.`,
  };
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const location = getLocation(params.location);

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4">📍</span>
            <h1 className="text-4xl md:text-5xl font-bold">Plumber {location.name}</h1>
          </div>
          <p className="text-xl text-primary-100">Your Local Plumbing Experts | Available 24/7 for Emergencies</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Plumbing Services in {location.name}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Looking for a reliable plumber in {location.name}? Sydney Elite Plumbing has been providing top-quality plumbing services to {location.name} residents and businesses for over 15 years. Our team of licensed, experienced plumbers is ready to handle all your plumbing needs, from emergency repairs to planned installations.
                </p>
                <p>
                  We understand that plumbing issues can be stressful and disruptive. That's why we're committed to providing fast, professional service that gets your plumbing back to normal as quickly as possible. Whether you're dealing with a burst pipe, blocked drain, or need a new hot water system installed, our {location.name} plumbers have the expertise and equipment to get the job done right.
                </p>
                <p>
                  As your local {location.name} plumber, we pride ourselves on being part of the community. We know the area well, understand the unique plumbing challenges that homes in {location.name} can face, and we're committed to providing honest, reliable service to our neighbors.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Our {location.name} Plumbers?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span><strong>Local & Fast:</strong> Based in Sydney with rapid response times to {location.name}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span><strong>24/7 Emergency Service:</strong> Available around the clock for urgent plumbing issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span><strong>Licensed & Insured:</strong> Fully qualified plumbers with comprehensive insurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span><strong>Upfront Pricing:</strong> Transparent quotes with no hidden charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span><strong>Quality Guaranteed:</strong> 100% satisfaction guarantee on all work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-2">✓</span>
                    <span><strong>Fully Equipped:</strong> Service vehicles stocked with parts for immediate repairs</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Plumbing Issues in {location.name}</h3>
                <p>
                  Our {location.name} plumbers regularly help local residents with a wide range of plumbing problems, including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Burst or leaking pipes requiring immediate repair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Blocked drains and toilets causing backups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Hot water system failures and replacements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Dripping taps and leaking fixtures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Gas leaks and gas appliance issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Stormwater drainage problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Bathroom and kitchen renovations</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Emergency Plumber {location.name}</h3>
                <p>
                  Plumbing emergencies don't wait for business hours. That's why Sydney Elite Plumbing offers 24/7 emergency plumbing services to {location.name}. Whether it's 3am on a Sunday or a public holiday, our emergency plumbers are standing by to help.
                </p>
                <p>
                  We understand that plumbing emergencies can cause significant damage if not addressed quickly. Our emergency response team prioritizes getting to you fast, typically within 60 minutes, with fully equipped vehicles ready to handle any urgent plumbing issue.
                </p>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
                  <h4 className="font-bold text-red-900 mb-2">Need Emergency Help?</h4>
                  <p className="text-red-800 mb-4">For urgent plumbing issues in {location.name}, call us immediately on <a href="tel:1300PLUMBER" className="font-bold underline">1300 PLUMBER</a></p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Box */}
              <div className="bg-primary-600 text-white p-6 rounded-lg shadow-lg mb-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Need a Plumber in {location.name}?</h3>
                <p className="mb-6">Fast, reliable service from licensed local plumbers.</p>
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

              {/* Service Hours */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">7am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">8am - 4pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Emergency Only</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-300">
                    <span>Emergency:</span>
                    <span className="font-semibold text-red-600">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Services in {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service => (
              <Link
                key={service.slug}
                href={`/${service.slug}-in-${location.slug}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="flex items-center mb-2">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <h3 className="font-bold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">{service.description.substring(0, 80)}...</p>
                <span className="text-primary-600 font-semibold text-sm hover:underline">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What {location.name} Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-600 mb-4">
                "Fantastic service! The plumber arrived quickly, fixed our burst pipe, and cleaned up perfectly. Highly recommend to anyone in {location.name}."
              </p>
              <p className="font-semibold text-gray-900">- Sarah M., {location.name}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional, honest, and reasonably priced. They replaced our hot water system and explained everything clearly. Great local plumbers!"
              </p>
              <p className="font-semibold text-gray-900">- John D., {location.name}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
