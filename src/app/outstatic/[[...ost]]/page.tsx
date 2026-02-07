/**
 * Outstatic CMS Dashboard Route
 * 
 * This page provides the CMS admin interface for managing blog content.
 * Only available when deployed to Vercel (excluded from static builds).
 * 
 * @requires OST_GITHUB_ID - GitHub OAuth App Client ID
 * @requires OST_GITHUB_SECRET - GitHub OAuth App Client Secret
 * 
 * @see https://outstatic.com/docs
 */
import { Outstatic } from 'outstatic';
import { OstClient } from 'outstatic/client';
import 'outstatic/outstatic.css';

/** Props type for Next.js 15 async params */
type PageProps = {
    params: Promise<{ ost?: string[] }>;
};

/**
 * Outstatic Dashboard Page Component
 * 
 * Renders the CMS interface for content management.
 * Handles catch-all routing for nested CMS pages.
 */
export default async function OutstaticPage({ params }: PageProps) {
    // Fetch CMS configuration and auth state
    const ostData = await Outstatic();

    // Await dynamic route params (Next.js 15 requirement)
    const resolvedParams = await params;

    // Normalize params: ensure 'ost' is always an array
    // Prevents undefined errors in Outstatic client
    const ostParams = {
        ost: resolvedParams.ost ?? []
    };

    return (
        <OstClient ostData={ostData} params={ostParams} />
    );
}
