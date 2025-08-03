"use client";

import Script from "next/script";

const StructuredData = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nidhi Patel",
    url: "https://patelnidhi.vercel.app/",
    image: "https://patelnidhi.vercel.app/nidhi.webp",
    jobTitle: "Digital Marketing Specialist",
    worksFor: {
      "@type": "Organization",
      name: "Codiste",
    },
    sameAs: [
      "https://www.linkedin.com/in/nidhi-m-patel/",
      "https://patelnidhi.vercel.app/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Gujarat",
    },
    knowsAbout: [
      "Nidhi Patel",
      "Digital Marketing Specialist",
      "SEO Expert",
      "Social Media Strategist",
      "Content Marketing",
      "AI in Marketing",
      "Marketing Consultant",
      "Marketing Instructor",
      "Digital Growth Expert",
      "Local SEO",
      "Content Creator",
      "Email Marketing",
      "Marketing Portfolio",
      "B2B Marketing",
      "Marketing Tools 2025",
    ],
    description:
      "Digital Marketing Specialist with 1.5+ years' experience in SEO, social media, and content strategy for organic growth and brand visibility.",
  };

  return (
    <Script
      id="json-ld-person"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default StructuredData;
