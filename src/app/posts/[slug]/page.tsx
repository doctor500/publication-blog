/**
 * Post Page - Individual blog post
 * Converts markdown to HTML using remark (trusted CMS source).
 */
import { getDocumentBySlug, getDocumentSlugs } from 'outstatic/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { remark } from 'remark';
import html from 'remark-html';

type Params = { params: Promise<{ slug: string }> };

// Convert markdown to HTML
async function markdownToHtml(markdown: string): Promise<string> {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}

// Generate static paths for all posts at build time
export async function generateStaticParams() {
    try {
        return getDocumentSlugs('posts').map((slug) => ({ slug }));
    } catch {
        return [];
    }
}

// Dynamic SEO metadata per post
export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = getDocumentBySlug('posts', slug, ['title', 'description']);
        return {
            title: post?.title || 'Post',
            description: post?.description || '',
            openGraph: { title: post?.title, description: post?.description, type: 'article' },
        };
    } catch {
        return { title: 'Post' };
    }
}

export default async function PostPage({ params }: Params) {
    const { slug } = await params;

    let post;
    try {
        post = getDocumentBySlug('posts', slug, ['title', 'publishedAt', 'content', 'author', 'description']);
    } catch {
        notFound();
    }

    if (!post) notFound();

    // Convert markdown content to HTML
    const contentHtml = await markdownToHtml(post.content || '');

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
            <article className="mx-auto max-w-3xl px-6 py-16">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                >
                    ← Back to posts
                </Link>

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

                {/* Content from CMS - pre-converted from markdown to HTML */}
                <div
                    className="prose prose-zinc dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </article>
        </div>
    );
}
