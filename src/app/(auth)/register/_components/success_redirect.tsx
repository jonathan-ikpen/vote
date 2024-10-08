import { BackgroundLines } from "@/components/ui/background-lines"
import Link from "next/link"
import { HELP_LINK } from "../../../../../constant"
import { capitalizeFirstLetter } from "@/lib/utils"

export default function SuccessRedirect({ name }: { name: string }) {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight max-w-4xl">
                {capitalizeFirstLetter(name)}, Your Request was Submitted Successfully.
            </h2>
            <p className="max-w-xl mx-auto z-40 text-xs md:text-sm text-neutral-700 dark:text-neutral-400 text-center">
                An email with your VotersID will be sent to you shortly after you&apos;ve been approved,
                Please Do not disclose your VotersID anybody. Copy it from the mail and keep it safe till the elections.
                If you need help contact <Link href={HELP_LINK} className=" underline text-gray-700 ">Admin</Link>
            </p>
        </BackgroundLines>
    )
}