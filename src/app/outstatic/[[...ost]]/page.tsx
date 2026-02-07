/**
 * Outstatic CMS Dashboard
 * Admin interface for managing blog content. Excluded from static builds.
 * @requires OST_GITHUB_ID, OST_GITHUB_SECRET env vars
 */
import { Outstatic } from 'outstatic';
import { OstClient } from 'outstatic/client';
import 'outstatic/outstatic.css';

type PageProps = {
    params: Promise<{ ost?: string[] }>;
};

export default async function OutstaticPage({ params }: PageProps) {
    const ostData = await Outstatic();
    const resolvedParams = await params;

    // Normalize params: ensure 'ost' is always an array
    const ostParams = { ost: resolvedParams.ost ?? [] };

    return <OstClient ostData={ostData} params={ostParams} />;
}
