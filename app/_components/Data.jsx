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
  // designation: "Digital Marketing Executive",
  designation: [
    "Digital Marketing Executive",
    "SEO Expert",
    "Social Media Strategist",
    "Content Marketing",
    "AI Marketing",
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
    "👋 Hi, I am ",
    <span key="n" className="highlight">
      Nidhi Patel
    </span>,
    ", a results-driven digital marketer with ",
    <span key="yrs" className="highlight">
      1.5+
    </span>,
    " years of experience in SEO, social media, and content marketing.",
  ],
  aboutSecondpara: [
    "I have a proven track record of helping brands enhance their online presence and achieve measurable marketing goals.",
    <span key="ai" className="highlight">
      AI marketing
    </span>,
    ", I am transitioning into consulting and instruction to help brands and professionals grow.",
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
      [
        "Led digital marketing for Codiste and its subsidiaries ",
        <span key="subsidiaries" className="highlight">
          (ThreejsDevelopers and DecentraBlock)
        </span>,
        " in the 3D technology and blockchain sectors.",
      ],
      "Managed LinkedIn & Instagram strategy, content, and creatives in collaboration with designers.",
      "Created SEO-optimized blogs, newsletters, and videos to drive engagement and leads.",
      "Conducted SEO audits and refined lead generation strategies with the senior consultant.",
      [
        <span key="ThreejsDevelopers" className="highlight">
          ThreejsDevelopers
        </span>,
        ": Created & scheduled content for to showcase 3D development services, maintaining brand presence on LinkedIn, Facebook, and Instagram.",
      ],
      [
        <span key="DecentraBlock" className="highlight">
          DecentraBlock
        </span>,
        ": Built a tailored content calendar for targeting B2B blockchain audiences.",
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
      "Led SEO projects boosting organic traffic by 55% and improving search rankings, driving higher engagement.",
      "Managed and grew presence across multiple social platforms, collaborating with developers to enhance content and user experience.",
      "Produced YouTube videos and organized community events to expand audience reach.",
      [
        <span key="project1" className="highlight">
          Key Project: Pyx IT Academy (Local SEO)
        </span>,
        ":- Achieved Top 3 Google ranking by optimizing Google Business Profile, targeting local keywords, and enhancing citations—driving visibility, engagement, and monthly organic visits.",
      ],
      [
        <span key="project2" className="highlight">
          Key Project: Jawed Habib (Website SEO)
        </span>,
        ":- Boosted keyword rankings and organic traffic through strategic on-page and off-page SEO, improving site visibility and showcasing strong analytical skills.",
      ],
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
      "Managed social media strategy and designed graphics, increasing reach by 30% in two months.",
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
    description:
      "Studied core CS subjects and specialized in digital marketing.",
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
