import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPost, getAllBlogSlugs, getAllBlogPosts } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';

export async function generateStaticParams() {
  return getAllBlogSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | Sydney Elite Plumbing Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords?.join(', '),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getAllBlogPosts()
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  const contentHtml = markdownToHtml(post.content);

  return (
    <>
      {/* Hero Section with Featured Image */}
      <section className="relative text-white py-20 min-h-[400px]">
        <div className="absolute inset-0 z-0">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-primary-600 to-primary-800"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end h-full pt-20">
          <div className="text-sm text-gray-200 mb-4">
            {new Date(post.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{post.title}</h1>
          <p className="text-lg text-gray-200 max-w-2xl">{post.excerpt}</p>
          <div className="mt-6 flex items-center">
            <div className="text-sm">
              <span className="text-gray-300">By </span>
              <span className="font-semibold">{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Images Gallery */}
          {post.images && post.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {post.images.slice(0, 3).map((img, idx) => (
                <div key={idx} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                  <Image src={img} alt={`${post.title} ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Main Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Keywords/Tags */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics:</h3>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword, index) => (
                  <span key={index} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Professional Plumbing Help?</h3>
            <p className="text-gray-600 mb-6">
              Our experienced team is here to help with all your plumbing needs. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:1300PLUMBER" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition text-center">
                Call 1300 PLUMBER
              </a>
              <Link href="/contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition border-2 border-primary-600 text-center">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    {relatedPost.featuredImage ? (
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-primary-400 to-primary-600"></div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(relatedPost.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
