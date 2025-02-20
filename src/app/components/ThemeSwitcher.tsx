"use client";
import Link from "next/link";
import { themes } from "@/app/data/themes";

export default function ThemeSwitcher() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-4 justify-center">
                {/* Buttons */}
                {themes.map((theme) => (
                    <Link key={theme.slug} href={`/theme/${theme.slug}`}>
                        <button className="px-4 py-2 border rounded transition-colors bg-white text-black hover:bg-blue-100">
                            {theme.name}
                        </button>
                    </Link>
                ))}
            </div>
            <div className="mt-6 p-4 border rounded shadow-lg max-w-md text-center">
                <p className="mt-1 text-sm italic">Click a theme to explore its visualization.</p>
            </div>
        </div>
    );
}
