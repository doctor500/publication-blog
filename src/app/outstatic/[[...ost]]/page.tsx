import { Outstatic } from 'outstatic';
import { OstClient } from 'outstatic/client';
import 'outstatic/outstatic.css';

type PageProps = {
    params: Promise<{ ost?: string[] }>;
};

export default async function OutstaticPage({ params }: PageProps) {
    const ostData = await Outstatic();
    const resolvedParams = await params;

    // Ensure 'ost' is always an array (default to empty array if undefined)
    const ostParams = {
        ost: resolvedParams.ost ?? []
    };

    return (
        <OstClient ostData={ostData} params={ostParams} />
    );
}
