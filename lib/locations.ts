import locationsData from '../locations.json';

export interface Location {
  name: string;
  slug: string;
}

export const locations: Location[] = locationsData.locations;

export function getLocation(slug: string): Location | undefined {
  return locations.find(l => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map(l => l.slug);
}
