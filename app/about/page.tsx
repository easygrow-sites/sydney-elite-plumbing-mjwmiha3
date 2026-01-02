import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Sydney Elite Plumbing',
  description: 'Learn about Sydney Elite Plumbing - your trusted local plumbers with over 15 years of experience serving Sydney homes and businesses.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sydney Elite Plumbing</h1>
          <p className="text-xl text-primary-100">Your trusted plumbing partner since 2008</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Sydney Elite Plumbing was founded in 2008 with a simple mission: to provide honest, reliable, and professional plumbing services to homes and businesses across Sydney. What started as a one-person operation has grown into a team of highly skilled, licensed plumbers serving the entire Sydney metropolitan area.
            </p>
            <p>
              Over the past 15+ years, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. We understand that plumbing problems can be stressful, which is why we're committed to making every job as smooth and hassle-free as possible.
            </p>
            <p>
              Today, Sydney Elite Plumbing is proud to be one of Sydney's most trusted plumbing companies, with thousands of satisfied customers and a team that treats every home as if it were their own.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every job is completed to the highest standards using premium materials and proven techniques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-xl font-bold mb-3">Customer Care</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs, communicate clearly, and ensure you're happy with every aspect of our service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Expert Solutions</h3>
              <p className="text-gray-600">
                Our licensed plumbers bring years of experience and ongoing training to deliver expert solutions for any plumbing challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qualifications & Certifications</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                <div>
                  <strong className="text-gray-900">Fully Licensed Plumbers</strong>
                  <p className="text-gray-600">All our plumbers hold current NSW plumbing licenses and are registered with Fair Trading NSW.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                <div>
                  <strong className="text-gray-900">Comprehensive Insurance</strong>
                  <p className="text-gray-600">We carry full public liability insurance and workers compensation for your protection.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                <div>
                  <strong className="text-gray-900">Gas Fitting License</strong>
                  <p className="text-gray-600">Licensed gas fitters qualified to work on all gas appliances and installations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                <div>
                  <strong className="text-gray-900">Ongoing Training</strong>
                  <p className="text-gray-600">Regular training ensures our team stays current with the latest plumbing technologies and techniques.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Sydney Elite Difference
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of satisfied customers who trust us with their plumbing needs.
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
