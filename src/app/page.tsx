import { getDocuments } from 'outstatic/server';
import Link from 'next/link';

type Post = {
  title: string;
  slug: string;
  publishedAt: string;
  description?: string;
};

export default async function Home() {
  let posts: Post[] = [];

  try {
    posts = getDocuments('posts', ['title', 'slug', 'publishedAt', 'description']);
  } catch (e) {
    // No posts yet or content directory doesn't exist
    console.log('No posts found or outstatic not configured:', e);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Publication Blog
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A static blog powered by Outstatic CMS
          </p>
        </header>

        {/* Posts Grid */}
        <section>
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                >
                  <Link href={`/posts/${post.slug}/`}>
                    <h2 className="mb-2 text-xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                        {post.description}
                      </p>
                    )}
                    <time className="text-sm text-zinc-500 dark:text-zinc-500">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center dark:border-zinc-700 dark:bg-zinc-900">
              <h2 className="mb-2 text-xl font-semibold text-zinc-700 dark:text-zinc-300">
                No posts yet
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Create your first post using the Outstatic dashboard.
              </p>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
          <p>
            Built with{' '}
            <a
              href="https://outstatic.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Outstatic
            </a>{' '}
            +{' '}
            <a
              href="https://nextjs.org"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
