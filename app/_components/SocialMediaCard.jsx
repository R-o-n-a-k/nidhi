import Image from "next/image";
import Link from "next/link";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export default function SocialMediaCard({ item }) {
    if (item.type === "reels") {
        return (
            <HeroVideoDialog
                animationStyle="from-center"
                videoSrc={item.video}
                thumbnailSrc={item.thumbnail}
                thumbnailAlt={item.title}
                 reelUrl={item.reelUrl}
            />
        );
    }

    return (
        <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <Image
                src={item.thumbnail}
                alt={item.title}
                width={1080}
                height={1350}
                className="h-auto w-full rounded-xl shadow-md transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg"
            />
        </Link>
    );
}