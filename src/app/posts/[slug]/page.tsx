/**
 * Individual Post Page
 * 
 * Displays a single blog post with full content.
 * Uses generateStaticParams for static site generation.
 * 
 * SECURITY NOTE: Uses dangerouslySetInnerHTML for rendered markdown.
 * This is acceptable because content comes from trusted source (Outstatic CMS)
 * managed by repository collaborators. Never use with user-submitted content.
 * 
 * @see https://outstatic.com/docs/fetching-data
 */
import { getDocumentBySlug, getDocumentSlugs } from 'outstatic/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

/** Props type for Next.js 15 async params */
type Params = {
    params: Promise<{ slug: string }>;
};

/**
 * Generate static paths for all posts at build time
 * Required for static export - pre-renders all post pages
 */
export async function generateStaticParams() {
    try {
        const slugs = getDocumentSlugs('posts');
        return slugs.map((slug) => ({ slug }));
    } catch {
        // Return empty array if no posts exist
        return [];
    }
}

/**
 * Generate dynamic metadata for SEO
 * Sets page title and description based on post content
 */
export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;

    try {
        const post = getDocumentBySlug('posts', slug, ['title', 'description']);
        return {
            title: post?.title || 'Post',
            description: post?.description || '',
            openGraph: {
                title: post?.title || 'Post',
                description: post?.description || '',
                type: 'article',
            },
        };
    } catch {
        return { title: 'Post' };
    }
}

/**
 * Post Page Component
 * 
 * Renders individual blog post with:
 * - Navigation back to home
 * - Post title and metadata
 * - Full markdown content (pre-rendered HTML)
 */
export default async function PostPage({ params }: Params) {
    const { slug } = await params;

    let post;
    try {
        // Fetch post data from local markdown file
        post = getDocumentBySlug('posts', slug, [
            'title',
            'publishedAt',
            'content',
            'author',
            'description',
        ]);
    } catch {
        notFound();
    }

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
            <article className="mx-auto max-w-3xl px-6 py-16">
                {/* Navigation - Back to posts list */}
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                >
                    ← Back to posts
                </Link>

                {/* Post Header */}
                <header className="mb-8">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                        {post.author?.name && <span>By {post.author.name}</span>}
                        <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </div>
                </header>

                {/* 
          Post Content
          
          SECURITY: dangerouslySetInnerHTML is used here because:
          1. Content is from trusted source (Outstatic CMS)
          2. Only repo collaborators can modify content
          3. Outstatic sanitizes markdown output
          
          DO NOT use this pattern with user-generated content.
        */}
                <div
                    className="prose prose-zinc dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
}
