import servicesData from '../services.json';

export interface Service {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const services: Service[] = servicesData.services;

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug);
}
