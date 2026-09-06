"use client";
import { socialMediaPosts } from "./Data";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { socialTypeButtons } from "./Data";

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
      <div className="flex gap-2 mb-4">
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
      {filteredPosts.map((post) => (
        <span>{post.title} <br /></span>
      ))}
    </>
  );
};

export default SocialMedia;
