import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vote",
    description: "School Online Voting System",
};


export default function AuthLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="flex justify-center items-center h-screen p-6 ">
            {children}
        </div>
    )
}