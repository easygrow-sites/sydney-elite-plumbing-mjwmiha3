import Link from 'next/link';
import { Service } from '@/lib/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200">
      <div className="text-4xl mb-3">{service.icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <span className="text-primary-600 font-semibold hover:underline">Learn More →</span>
    </Link>
  );
}
