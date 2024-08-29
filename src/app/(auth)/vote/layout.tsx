import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vote",
    description: "School Online Voting System",
};


export default function VoteLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="flex justify-center items-center h-full">
            {children}
        </div>
    )
}