import {
  BriefcaseBusiness, // FaBriefcase
  GraduationCap, // FaGraduationCap
  Network, // FaLinkedin → (connections / people)
  Mail, // FaEnvelope
  MapPin, // FaMapMarkerAlt
  ClipboardList, // FaClipboardList
  TrendingUp, // FaChartLine
  Globe, // FaGoogle → (global/search)
  Palette, // SiCanva → (design/creative)
  SearchCheck, // MdManageSearch
  Search, // FaMagnifyingGlassChart
  Share2, // FaShareNodes
  UserCog, // FaUserGear
  PenTool, // FaFigma → (design tool)
  Clapperboard, // FaClapperboard
  MailCheck, // FaEnvelopeOpenText
  Building2,
  ChartColumn,
  ScanSearch,
  ScanEye, // FaBusinessTime
} from "lucide-react";
import { LinkedInIcon, MailIcon, MediumIcon } from "./Icons";

/* -------------------------------------------------------------------------- */
/*                                  MetaData                                  */
/* -------------------------------------------------------------------------- */

export const metaDataContent = {
  title: {
    default: "Nidhi Patel | Digital Marketing Specialist",
    template: "%s | Nidhi Patel",
  },
  description:
    "Digital Marketing Specialist with 1.3+ years' experience in SEO, social media, and content strategy for organic growth and brand visibility.",
  verification: {
    google: "oPfZV3uf-uIZFjb9diMT7grDKNexLvs_0UBN3Iy5adg", // the code from <meta name="google-site-verification" content="xxxx" />
  },
  keywords: [
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
  authors: [
    {
      name: "Nidhi Patel",
      url: "https://patelnidhi.vercel.app/",
    },
  ],
  creator: "Nidhi Patel",
  publisher: "Nidhi Patel",
  metadataBase: "https://patelnidhi.vercel.app/",
  openGraph: {
    title: "Nidhi Patel | Digital Marketing Specialist",
    description:
      "Helping brands grow through strategic SEO, content, and social media. Explore the digital expertise of Nidhi Patel.",
    url: "https://patelnidhi.vercel.app/",
    siteName: "Nidhi Patel",
    images: [
      {
        url: "/nidhi.webp",
        width: 1200,
        height: 630,
        alt: "Nidhi Patel - Digital Marketing Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Patel | Digital Marketing Specialist",
    description:
      "Empowering brands with smart SEO, social media, and AI-powered digital strategies. 1.3+ years of results-driven marketing.",
    images: ["/nidhi.webp"],
  },
  alternates: {
    canonical: "https://patelnidhi.vercel.app/",
  },
};

/* -------------------------------------------------------------------------- */
/*                                    Home                                    */
/* -------------------------------------------------------------------------- */

export const introduction = {
  image: "/nidhi.webp",
  name: "Nidhi Patel",
  designation: [
    "Digital Marketer",
    "SEO & Social Media Executive",
    "Creative Content Strategist",
    "AI Marketing Explorer",
  ],
  location: "Ahmedabad, India",
  resume: "/Nidhi_Patel_Digital_Marketing_Executive.pdf",
};

/* -------------------------------------------------------------------------- */
/*                                    ABOUT                                   */
/* -------------------------------------------------------------------------- */

export const aboutPage = {
  title: "About",
  aboutFirstpara: [
    "👋 Hi, I’m Nidhi, a ",
    <span key="desig" className="highlight">
      Digital Marketer
    </span>,
    " with over ",
    <span key="yrs" className="highlight">
      1.3
    </span>,
    " years of experience giving algorithms something to talk about.",
  ],
  aboutSecondpara: [
    "I blend SEO, analytics, and brand development to craft strategies that get brands seen and remembered. Lately, I’ve been diving into AI marketing to create smarter campaigns that save time and deliver real results.",
  ],
};

// Skills
export const skills = [
  {
    id: 1,
    name: "SEO",
    icon: Search,
  },
  {
    id: 2,
    name: "Social Media Marketing",
    icon: Share2,
  },
  {
    id: 3,
    name: "Content Strategist",
    icon: ClipboardList,
  },
  {
    id: 4,
    name: "Keyword Research",
    icon: SearchCheck,
  },
  {
    id: 5,
    name: "Performance Analytics",
    icon: TrendingUp,
  },
  {
    id: 6,
    name: "Email Marketing & Newsletter",
    icon: MailCheck,
  },
  {
    id: 7,
    name: "Google Search Console ",
    icon: Globe,
  },
  {
    id: 8,
    name: " Google Analytics",
    icon: ChartColumn,
  },
  {
    id: 9,
    name: "Profile Optimization",
    icon: UserCog,
  },
  {
    id: 10,
    name: "Competitor Analysis",
    icon: ScanEye,
  },
  {
    id: 11,
    name: "Canva",
    icon: Palette,
  },
  {
    id: 12,
    name: "Video Editing",
    icon: Clapperboard,
  },
];

// certification
export const certifications = {
  firstPara:
    "Over the course of my career, I’ve earned certifications that strengthen my expertise in digital marketing, SEO and social media strategy.",
  secondPara:
    "Each certification reflects my commitment to staying ahead in an ever-evolving digital landscape and delivering impactful, results-oriented strategies for brands.",
};

export const certificatesDetail = [
  {
    id: 1,
    title: "SEO",
    image: "/images/certificates/seo.webp",
  },
  {
    id: 2,
    title: "Social Media",
    image: "/images/certificates/socialMedia.webp",
  },
  {
    id: 3,
    title: "Linkedin Marketing Strategy",
    image: "/images/certificates/linkedinMarketingStrategy.webp",
  },
];

/* -------------------------------------------------------------------------- */
/*                                    Career                                   */
/* -------------------------------------------------------------------------- */
// Work Experience
export const workData = [
  {
    title: "Marketer",
    company: "Codiste",
    location: "Ahmedabad, India",
    date: "Nov 2024 – Feb 2025",
    icon: BriefcaseBusiness,
    description: [
      "Managed SEO initiatives, including keyword research, content optimization, and on-page improvements.",
      "Coordinated social media content creation and publishing for brand engagement.",
      "Collaborated with cross-functional teams to align marketing strategies with project goals.",
      "Adapted quickly to new workflows and tools to meet tight deadlines for deliverables.",
      [
        <span key="ThreejsDevelopers" className="highlight">
          ThreejsDevelopers
        </span>,
        ": Created & scheduled content to maintain brand presence on LinkedIn, Facebook, and Instagram.",
      ],
      [
        <span key="DecentraBlock" className="highlight">
          DecentraBlock
        </span>,
        ": Planned and published posts to keep brand active on LinkedIn, Facebook, and Instagram.",
      ],
    ],
  },
  {
    title: "Digital Marketing Executive",
    company: "Kpyxal Solutions LLP",
    location: "Ahmedabad, India",
    date: "May 2024 – Oct 2024",
    icon: BriefcaseBusiness,
    description: [
      "Led SEO campaigns that increased organic traffic and improved search rankings for key terms.",
      "Managed and expanded brand presence across social platforms, ensuring consistent engagement.",
      "Collaborated with developers to enhance content quality and overall user experience.",
      "Produced YouTube videos and organized community events to grow and engage the audience.",
    ],
  },
  {
    title: "Digital Marketing Intern",
    company: "Kpyxal Solutions LLP",
    location: "Ahmedabad, India",
    date: "Feb 2024 – April 2024",
    icon: BriefcaseBusiness,
    description: [
      "Published 60+ SEO-optimized blogs with keyword research and on-page SEO, boosting rankings and visibility.",
      "Managed social media strategy and designed graphics, increasing reach in two months.",
    ],
  },
];

//Education Data
export const educationData = [
  {
    title: "BCA",
    company: "University of Gujarat",
    location: "Ahmedabad, India",
    date: "2019 –2022",
    icon: GraduationCap,
    // description: [
    //   "Completed BCA at University of Gujarat, with a strong foundation in computer science, programming, and networking.",
    // ],
  },
];


/* -------------------------------------------------------------------------- */
/*                                    Creations                                   */
/* -------------------------------------------------------------------------- */
// Blog Data

export const blogsData = [
  {
    id: 1,
    title: "How to Repurpose One Blog Post Into 10 Pieces of Content",
    description: "Learn how to repurpose one strong blog idea into ten engaging pieces across different content platforms.",
    link: "https://nidhi-patel-marketer.medium.com/how-i-ranked-3-on-google-in-45-days-as-a-complete-beginner-beacd7cc6bef"
  },
  {
    id: 2,
    title: "How I Ranked #3 on Google in 45 Days (As a Complete Beginner)",
    description: "Discover how a beginner used systematic local SEO strategies to rank an IT academy #3 on Google.",
    link: "https://nidhi-patel-marketer.medium.com/how-to-repurpose-one-blog-post-into-10-pieces-of-content-2e96e885c2bb"
  },]


// Social Media Data
export const socialTypeButtons = [
  {
    type: "all",
  },
  {
    type: "reels",
  },
  {
    type: "posts",
  },
];


export const socialMediaPosts = [
  {
    id: 6,
    type: "reels",
    title: "Social Media Reality",
    thumbnail: "/videos/social-media-reality-poster.jpg",
    video: "/videos/social-media-reality.mp4",
    // reelUrl: "https://magicui.design/docs/components/hero-video-dialog",  need to add reel url for this video
  },
  {
    id: 1,
    type: "posts",
    title: "AI to the rescue",
    thumbnail: "/images/socialMedia/post1.webp",
    url: "https://www.instagram.com/codistepvtltd/p/DFOWx-CIXPi/",
  },
  {
    id: 2,
    type: "reels",
    title: "Christmas Campaign",
    thumbnail: "/videos/christmas-campaign-poster.jpg",
    video: "/videos/christmas-campaign.mp4",
    // reelUrl: "https://magicui.design/docs/components/hero-video-dialog", need to add reel url for this video
  },
  {
    id: 3,
    type: "posts",
    title: "AI Speeds Up Content Creation",
    thumbnail: "/images/socialMedia/post2.webp",
    url: "https://www.instagram.com/codistepvtltd/p/DFOWx-CIXPi/",
  },
  {
    id: 4,
    type: "reels",
    title: "Mens Day Campaign",
    thumbnail: "/videos/mens-day-campaign-poster.jpg",
    video: "/videos/mens-day-campaign.mp4",
    // reelUrl: "https://magicui.design/docs/components/hero-video-dialog", need to add reel url for this video
  },
  {
    id: 5,
    type: "posts",
    title: "KPYXAL Business Marketing",
    thumbnail: "/images/socialMedia/post3.webp",
    url: "https://www.instagram.com/kpyxal_solutions_llp/p/C3EqwigtMat/",
  },
  {
    id: 7,
    type: "posts",
    title: "Codiste Hackathon",
    thumbnail: "/images/socialMedia/post4.webp",
    url: "https://www.instagram.com/codistepvtltd/p/DESD8-MNr-v/",
  },
  {
    id: 8,
    type: "reels",
    title: "Think Outside the Box",
    thumbnail: "/videos/think-outside-the-box-poster.jpg",
    video: "/videos/think-outside-the-box.mp4",
    // reelUrl: "https://magicui.design/docs/components/hero-video-dialog",  need to add reel url for this video
  },
  {
    id: 9,
    type: "posts",
    title: "𝐀𝐈 𝐊𝐧𝐨𝐰𝐬 𝐇𝐮𝐦𝐚𝐧𝐬 𝐁𝐞𝐭𝐭𝐞𝐫",
    thumbnail: "/images/socialMedia/post5.webp",
    url: " https://www.instagram.com/codistepvtltd/p/DC8eL9lJDTA/",
  },
  {
    id: 10,
    type: "posts",
    title: "kpyxal Leave Meme",
    thumbnail: "/images/socialMedia/post12.webp",
    url: " https://www.instagram.com/kpyxal_solutions_llp/p/C3RmYQEtul0/",
  },
  {
    id: 11,
    type: "posts",
    title: "Codiste Christmas Campaign",
    thumbnail: "/images/socialMedia/post6.webp",
    url: " https://www.instagram.com/codistepvtltd/p/DDKZHG4M129/",
  },
  {
    id: 13,
    type: "posts",
    title: "KPYXAL Excellence in Marketing",
    thumbnail: "/images/socialMedia/post7.webp",
    url: " https://www.instagram.com/kpyxal_solutions_llp/p/C3AELtVN89Y/",
  },
  {
    id: 14,
    type: "posts",
    title: "KPYXAL Website Service Campaign",
    thumbnail: "/images/socialMedia/post11.webp",
    url: " https://www.instagram.com/kpyxal_solutions_llp/p/C3ZdcPkNUL6/",
  },
  {
    id: 22,
    type: "reels",
    title: "Video Editing Reality",
    thumbnail: "/videos/video-editing-reality-poster.webp",
    video: "/videos/video-editing-reality.mp4",
    reelUrl: "https://www.instagram.com/reel/C9OxSeCKvnf/?stkn=N3U4MXZxcjQ1bWVr",
  },
  {
    id: 15,
    type: "posts",
    title: "Codiste Hackathon Campaign",
    thumbnail: "/images/socialMedia/post9.webp",
    url: "https://www.instagram.com/codistepvtltd/p/DEWiUj5I6gL/",
  },
  {
    id: 25,
    type: "reels",
    title: "KPYXAL introduction",
    thumbnail: "/videos/kpyxal-introduction-poster.webp",
    video: "/videos/kpyxal-introduction.mp4",
    reelUrl: "https://www.instagram.com/reel/C4pNTrDKoy5/?stkn=MWgwMWc2eXFnanlzZg%3D%3D",
  },
  {
    id: 16,
    type: "posts",
    title: "Manager Mindset",
    thumbnail: "/images/socialMedia/post8.webp",
    url: "https://www.instagram.com/kpyxal_solutions_llp/p/C7Vdn7INBW6/",
  },
  {
    id: 17,
    type: "posts",
    title: "Deepseek News",
    thumbnail: "/images/socialMedia/post10.webp",
    url: "https://www.instagram.com/codistepvtltd/p/DFf5cvRMtuN/",
  },
{
    id: 18,
    type: "posts",
    title: "Free Seo Tools for Markters",
    thumbnail: "/images/socialMedia/post13.webp",
    url: "https://lnkd.in/p/dqTCz4G5",
  },
  {
    id: 19,
    type: "posts",
    title: "Alt text Importance for SEO",
    thumbnail: "/images/socialMedia/post14.webp",
    url: "https://lnkd.in/p/ds_SnhV5",
  },
   {
    id: 20,
    type: "posts",
    title: "CRED IPL Marketing Strategy",
    thumbnail: "/images/socialMedia/post15.webp",
    url: "https://lnkd.in/p/d_juq_-t",
  },
  {
    id: 24,
    type: "reels",
    title: "Chai Love",
    thumbnail: "/videos/chai-love-poster.webp",
    video: "/videos/chai-love.mp4",
    reelUrl: "https://www.instagram.com/reel/C68mh6qqtmN/?stkn=MW5kb2pwaWlnOXF4bA%3D%3D",
  },
  {
    id: 21,
    type: "posts",
    title: "CRED IPL Success Strategy",
    thumbnail: "/images/socialMedia/post16.webp",
    url: "https://lnkd.in/p/dVGhmhQs",
  },
  {
    id: 23,
    type: "reels",
    title: "Social Media Creator Reality",
    thumbnail: "/videos/social-media-creator-reality-poster.webp",
    video: "/videos/social-media-creator-reality.mp4",
    reelUrl: "https://www.instagram.com/reel/C76Egnfq-6e/?stkn=MTRlcXY4aHE4dHk4dw%3D%3D",
  },
];

/* -------------------------------------------------------------------------- */
/*                                    Contact                                   */
/* -------------------------------------------------------------------------- */

export const contactInfo = [
  {
    icon: LinkedInIcon,
    name: "in/nidhi-patel-marketer",
    link: "https://www.linkedin.com/in/nidhi-patel-marketer/",
  },
  {
    icon: MediumIcon,
    name: "@nidhi-patel-marketer",
    link: "https://nidhi-patel-marketer.medium.com/",
  },
  {
    icon: MailIcon,
    name: "nidhipatel.marketer@gmail.com",
  },
];
