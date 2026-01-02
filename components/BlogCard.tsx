import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200">
      <div className="h-48 bg-gradient-to-r from-primary-400 to-primary-600"></div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {post.author}</span>
          <span className="text-primary-600 font-semibold hover:underline">Read More →</span>
        </div>
      </div>
    </Link>
  );
}
