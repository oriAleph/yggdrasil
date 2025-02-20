import { notFound } from "next/navigation"
import { themes } from "@/app/data/themes"

interface ThemePageProps { params: { themeID: string }; }

export default async function ThemePage({ params }: ThemePageProps) {
    const resolvedParams = await Promise.resolve(params);
    const { themeID } = resolvedParams;
    const theme = themes.find((t) => t.slug === themeID);
    if (!theme) { notFound(); }
  
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{theme.name}</h1>
            <p className="mb-4">{theme.description}</p>
            {/* visualizations */}
            <div className="border rounded p-4">
                <p>Visualization for {theme.name} coming soon...</p>
            </div>
        </div>
    );
}
  