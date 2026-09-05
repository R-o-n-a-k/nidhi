import Link from "next/link";
// import {
//     HoverCard,
//     HoverCardContent,
//     HoverCardTrigger,
// } from "@/components/ui/hover-card"
// import { AnimatedShinyText } from "../ui/animated-shiny-text";
// import { BorderBeam } from "../ui/border-beam";

const ArrowCard = ({ blog, link }) => {
    return (
        <>
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="my-3 relative group flex flex-nowrap py-3 px-4 pr-10 rounded-md border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:text-white duration-100 ease-in-out"
            >
                <div className="flex flex-col flex-1">
                    <div className="text-sm md:text-base text-foreground font-medium mb-1 tracking-wide">
                        {blog.title}
                    </div>
                    <div className="text-[13px] md:text-sm text-content">
                        {/* <AnimatedShinyText> */}
                        {blog.description}
                        {/* </AnimatedShinyText> */}
                    </div>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="absolute top-1/2 right-2 -translate-y-1/2 size-5 stroke-2 fill-none stroke-current"
                >
                    <line
                        x1="5"
                        y1="12"
                        x2="19"
                        y2="12"
                        className="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-100 ease-in-out"
                    />
                    <polyline
                        points="12 5 19 12 12 19"
                        className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                    />
                </svg>
                {/* <BorderBeam /> */}
            </Link>
        </>
    )
}

export default ArrowCard