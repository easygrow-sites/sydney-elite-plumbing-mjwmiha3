import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  featuredImage: string;
  images: string[];
  keywords: string[];
  metaDescription: string;
}

const blogDirectory = path.join(process.cwd(), 'content/blog');

export function getAllBlogPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(blogDirectory)) return [];
    return fs.readdirSync(blogDirectory)
      .filter(f => f.endsWith('.json'))
      .map(f => JSON.parse(fs.readFileSync(path.join(blogDirectory, f), 'utf8')))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const p = path.join(blogDirectory, `${slug}.json`);
    return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : null;
  } catch {
    return null;
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    if (!fs.existsSync(blogDirectory)) return [];
    return fs.readdirSync(blogDirectory)
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''));
  } catch {
    return [];
  }
}
