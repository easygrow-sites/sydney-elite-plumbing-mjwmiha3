import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Sydney Elite Plumbing - 1300 PLUMBER',
  description: 'Contact Sydney Elite Plumbing for all your plumbing needs. Available 24/7 for emergency plumbing services across Sydney. Call 1300 PLUMBER now.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100">Get in touch for fast, reliable plumbing services</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you need emergency plumbing assistance or want to schedule a service, we're here to help. Our friendly team is available 24/7 to take your call.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:1300PLUMBER" className="text-primary-600 hover:text-primary-700 text-lg font-semibold">
                      1300 PLUMBER
                    </a>
                    <p className="text-gray-600 text-sm">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@sydneyeliteplumbing.com.au" className="text-primary-600 hover:text-primary-700">
                      info@sydneyeliteplumbing.com.au
                    </a>
                    <p className="text-gray-600 text-sm">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-600">All Sydney suburbs</p>
                    <p className="text-gray-600 text-sm">Fast response across greater Sydney</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">🕐</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">24/7 Emergency Service</p>
                    <p className="text-gray-600 text-sm">Regular hours: Mon-Fri 7am-6pm, Sat 8am-4pm</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                <h3 className="font-bold text-gray-900 mb-2">Emergency Plumbing?</h3>
                <p className="text-gray-600 mb-4">
                  For urgent plumbing issues like burst pipes, gas leaks, or severe blockages, call us immediately for the fastest response.
                </p>
                <a href="tel:1300PLUMBER" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition">
                  Call Emergency Line
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicing All Sydney Areas</h2>
            <p className="text-gray-600">
              We provide professional plumbing services throughout Sydney, from the CBD to the outer suburbs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-gray-700">Eastern Suburbs</div>
              <div className="text-gray-700">Western Sydney</div>
              <div className="text-gray-700">North Shore</div>
              <div className="text-gray-700">Southern Sydney</div>
              <div className="text-gray-700">Inner West</div>
              <div className="text-gray-700">Northern Beaches</div>
              <div className="text-gray-700">Hills District</div>
              <div className="text-gray-700">Canterbury-Bankstown</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
