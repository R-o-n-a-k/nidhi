"use client";
import { socialMediaPosts } from "./Data";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { socialTypeButtons } from "./Data";
import SocialMediaCard from "./SocialMediaCard";

const SocialMedia = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts =
    activeFilter === "all"
      ? socialMediaPosts
      : socialMediaPosts.filter(
        (item) => item.type === activeFilter
      );

  return (
    <>
      <div className="flex gap-2 mb-6">
        {socialTypeButtons.map((btn) => {
          const isActive = activeFilter === btn.type;

          return (
            <Button
              key={btn.type}
              size="sm"
              variant={isActive ? "default" : "ghost"}
              onClick={() => setActiveFilter(btn.type)}
              className={`capitalize cursor-pointer ${isActive
                ? ""
                : "hover:bg-transparent hover:underline underline-offset-4"
                }`}
            >
              {btn.type}
            </Button>
          );
        })}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 md:columns-4">
        {filteredPosts.map((item) => (
          <div key={item.id} className="mb-5 break-inside-avoid">
            <SocialMediaCard
              key={item.id}
              item={item}
            />
          </div>
        ))}

      </div>
    </>
  );
};

export default SocialMedia;
