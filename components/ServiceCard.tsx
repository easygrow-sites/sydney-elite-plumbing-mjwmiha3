import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/lib/services';

interface ServiceCardProps {
  service: Service;
}

const serviceImages: Record<string, string> = {
  'emergency-plumbing': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=500&fit=crop',
  'blocked-drains': 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=500&fit=crop',
  'hot-water-systems': 'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=800&h=500&fit=crop',
  'leak-detection': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
  'pipe-relining': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=500&fit=crop',
  'bathroom-renovations': 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=500&fit=crop',
  'kitchen-plumbing': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop',
  'gas-fitting': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=500&fit=crop',
  'toilet-repairs': 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=800&h=500&fit=crop',
  'tap-repairs': 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=500&fit=crop',
  'stormwater-drainage': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=500&fit=crop',
  'sewer-services': 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800&h=500&fit=crop',
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const imageUrl = serviceImages[service.slug] || 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=500&fit=crop';

  return (
    <Link href={`/services/${service.slug}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={service.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-4 text-white">
          <span className="text-3xl">{service.icon}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
        <span className="text-primary-600 font-semibold group-hover:underline">Learn More →</span>
      </div>
    </Link>
  );
}
