import {
  FaBriefcase,
  FaGraduationCap,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
/* -------------------------------------------------------------------------- */
/*                                  MetaData                                  */
/* -------------------------------------------------------------------------- */

export const metaDataContent = {
  title: {
    default: "Nidhi Patel | Digital Marketing Specialist",
    template: "%s | Nidhi Patel",
  },
  description:
    "Digital Marketing Specialist with 1.5+ years' experience in SEO, social media, and content strategy for organic growth and brand visibility.",
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
      "Empowering brands with smart SEO, social media, and AI-powered digital strategies. 1.5+ years of results-driven marketing.",
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
  resume: "/NidhiPatel_MarketingExecutive_Resume.pdf",
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
      1.5
    </span>,
    " years of experience giving algorithms something to talk about.",
  ],
  aboutSecondpara: [
    "I blend SEO, analytics, and brand development to craft strategies that get brands seen and remembered. Lately, I’ve been diving into AI marketing to create smarter campaigns that save time and deliver real results.",
  ],
};

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
    icon: <FaBriefcase />,
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
    icon: <FaBriefcase />,
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
    icon: <FaBriefcase />,
    description: [
      "Published 60+ SEO-optimized blogs with keyword research and on-page SEO, boosting rankings and visibility.",
      "Managed social media strategy and designed graphics, increasing reach in two months.",
    ],
  },
];

export const educationData = [
  {
    title: "BCA",
    company: "University of Gujarat",
    location: "Ahmedabad, India",
    date: "2019 –2022",
    icon: <FaGraduationCap />,
  },
];

/* -------------------------------------------------------------------------- */
/*                                    Contact                                   */
/* -------------------------------------------------------------------------- */

export const contactInfo = [
  {
    icon: <FaLinkedin />,
    name: "in/nidhi-m-patel",
    link: "https://www.linkedin.com/in/nidhi-m-patel/",
  },
  {
    icon: <FaEnvelope />,
    name: "nidhipatel2265@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    name: "Ahmedabad, India",
  },
];
