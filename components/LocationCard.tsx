import Link from 'next/link';
import { Location } from '@/lib/locations';

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <Link href={`/locations/${location.slug}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200">
      <div className="flex items-center mb-3">
        <span className="text-3xl mr-3">📍</span>
        <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
      </div>
      <p className="text-gray-600 mb-4">
        Professional plumbing services in {location.name}. 24/7 emergency response available.
      </p>
      <span className="text-primary-600 font-semibold hover:underline">View Services →</span>
    </Link>
  );
}
