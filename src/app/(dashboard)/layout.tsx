import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vote",
    description: "School Online Voting System",
};


export default function AuthLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="flex h-full">
            <div className="flex fmin-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8">
                {children}
            </div>
        </div>
    )
}