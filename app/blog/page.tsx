import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Plumbing Blog | Tips & Advice | Sydney Elite Plumbing',
  description: 'Expert plumbing tips, advice, and guides from Sydney Elite Plumbing. Learn about plumbing maintenance, repairs, and more.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plumbing Blog</h1>
          <p className="text-xl text-primary-100">Expert tips, guides, and advice from Sydney's plumbing professionals</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600 mb-8">
                We're working on creating valuable plumbing content for you. Check back soon for expert tips, guides, and advice!
              </p>
              <Link href="/" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                Return to Homepage
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Categories - Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold text-gray-900">Maintenance</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🚨</div>
              <h3 className="font-bold text-gray-900">Emergency Tips</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-bold text-gray-900">How-To Guides</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-bold text-gray-900">Cost Savings</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
