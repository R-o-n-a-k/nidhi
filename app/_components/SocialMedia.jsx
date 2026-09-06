"use client";
import { socialMediaPosts } from "./Data";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { socialCategoryButtons } from "./Data";

const SocialMedia = () => {
  const [filteredPosts, setFilteredPosts] = useState(socialMediaPosts);
  const [activeCategory, setActiveCategory] = useState("all");


  const filterPosts  = (value) => {
    if (value === "all") {
      setFilteredPosts(socialMediaPosts);
    } else {
      const newPosts = socialMediaPosts.filter((post) => {
        return value === post.category;
      });
      setFilteredPosts(newPosts);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    filterPosts(category);
  }

  return (
    <>
      <div className="flex gap-2 mb-4">
        {socialCategoryButtons.map((btn) => {
          const isActive = activeCategory === btn.category;

          return (
            <Button
              key={btn.category}
              size="sm"
              variant={isActive ? "default" : "ghost"}
              onClick={() => handleCategoryChange(btn.category)}
              className={`capitalize cursor-pointer ${isActive
                  ? ""
                  : "hover:bg-transparent hover:underline underline-offset-4"
                }`}
            >
              {btn.category}
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
