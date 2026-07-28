import { ExperienceItem, ProjectItem, PhotoCard, ToolBadge } from '../types';

export const AISHA_INFO = {
  name: "AISHA ADESHINA",
  title: "Media & Content Creator | Video Editor | Digital Communications",
  shortRole: "Media & Content Creator",
  location: "Ilorin, Kwara, Nigeria",
  phone: "+234 706 539 6819",
  email: "aishaadeshina233@gmail.com",
  linkedin: "https://linkedin.com/in/aisha-adeshina",
  linkedinHandle: "linkedin.com/in/aisha-adeshina",
  aboutBio: `Creative and versatile Media & Content Creator with hands-on experience in video editing, social media content creation, digital campaigns, editorial content, and visual storytelling. Skilled in developing engaging content that captures audience attention, communicates ideas clearly, and strengthens brand visibility and community engagement. Experienced in taking content from ideation to publication, collaborating with media teams, and creating promotional content for campaigns and events. Demonstrated ability to grow video viewership from approximately 1,000 to over 11,000 views through effective content production and editing.`,
  coreSkills: [
    "Video Editing",
    "Social Media Content Creation",
    "Content Strategy & Planning",
    "Script & Caption Writing",
    "Creative Concept Development",
    "Editorial Content Development",
    "Event & Campaign Promotion",
    "Team Collaboration",
    "Presentation & Public Speaking"
  ],
  additionalSkills: [
    "Written & Verbal Communication",
    "Content Ideation",
    "Audience Engagement",
    "Event Promotion",
    "Microsoft Word",
    "Canva",
    "CapCut",
    "Adobe Premiere Pro",
    "Photoshop"
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "MEDIA & CONTENT CREATOR",
    company: "The Dawn Nigeria",
    location: "Ilorin, Nigeria · On-site / Remote",
    period: "June 2023 – Present",
    badgeBg: "#4f46e5",
    badgeTextColor: "#ffffff",
    badgeLetter: "TD",
    bullets: [
      "Produce engaging video content for Instagram, growing video viewership from approximately 1,000 to over 11,000 views.",
      "Write captions, scripts, and promotional copy that communicate key messages and encourage audience interaction.",
      "Collaborate with the media team to brainstorm, plan, and execute creative content and digital campaigns.",
      "Develop promotional content for organizational events, programmes, and campaigns, including the Dawah Holiday Program, supporting increased awareness and participation.",
      "Apply visual storytelling and creative editing techniques to communicate ideas effectively and strengthen digital presence, brand visibility, and community engagement."
    ]
  },
  {
    id: "exp-2",
    role: "EDITORIAL VOLUNTEER",
    company: "The Dawn Nigeria",
    location: "Nigeria · Remote",
    period: "January 2026 – Present",
    badgeBg: "#059669",
    badgeTextColor: "#ffffff",
    badgeLetter: "ED",
    bullets: [
      "Support the production and planning of editorial newsletters for the organization.",
      "Led and hosted the first Editorial workshop of the organization that increased audience awareness."
    ]
  },
  {
    id: "exp-3",
    role: "MEDIA TEAM MEMBER",
    company: "Google Developer Group – Career Fest",
    location: "Nigeria · Event",
    period: "October 2023",
    badgeBg: "#ea4335",
    badgeTextColor: "#ffffff",
    badgeLetter: "GDG",
    bullets: [
      "Supported media activities and content production for a career-focused event.",
      "Contributed to event communication, digital content, and promotional activities in collaboration with the media team."
    ]
  },
  {
    id: "exp-4",
    role: "CAMPUS AMBASSADOR",
    company: "Cowrywise",
    location: "Ilorin, Nigeria · On Campus",
    period: "June 2023 – Present",
    badgeBg: "#2563eb",
    badgeTextColor: "#ffffff",
    badgeLetter: "CW",
    bullets: [
      "Reached and impacted 100+ students through peer engagement and content sharing.",
      "Support campus activation strategies while communicating product information clearly to students and prospective users."
    ]
  }
];

export const PHOTO_GALLERY: PhotoCard[] = [
  {
    id: "photo-1",
    title: "Sisters' Seminar Campaign",
    caption: "Media coverage & promo graphics for The Dawn Sisters' Seminar 2026",
    imageUrl: "/images/dawn/2026-07-26_13-45-03_UTC_1.jpg",
    rotateDeg: -5,
    tag: "Event Promo"
  },
  {
    id: "photo-2",
    title: "DHP Campaign Q&A",
    caption: "Visual storytelling & Dawah Holiday Program campaign reel snippets",
    imageUrl: "/images/dawn/2024-12-03_17-10-59_UTC_1.jpg",
    rotateDeg: -2,
    tag: "Campaign Reel"
  },
  {
    id: "photo-3",
    title: "Writing & Editorial Series",
    caption: "Editorial workshop & digital publication graphics for The Dawn Nigeria",
    imageUrl: "/images/dawn/2026-06-14_07-50-45_UTC.jpg",
    rotateDeg: 3,
    tag: "Editorial"
  },
  {
    id: "photo-4",
    title: "The Dawn Community Broadcasts",
    caption: "Regional district activations & announcements for The Dawn Nigeria",
    imageUrl: "/images/dawn/2026-05-18_12-13-50_UTC.jpg",
    rotateDeg: 6,
    tag: "Community"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Viral Video Content Growth Series",
    category: "Video Editing",
    client: "The Dawn Nigeria",
    description: "Designed, edited, and captioned dynamic short-form video reels that scaled Instagram viewership by +1,000% from 1,000 views to 11,000+ views per reel.",
    metric: "1k → 11k+ Views",
    thumbnail: "/images/dawn/2026-07-26_13-45-03_UTC_1.jpg",
    tags: ["CapCut", "Reels", "Scripting", "Video Editing"],
    featured: true
  },
  {
    id: "proj-2",
    title: "Dawah Holiday Program Campaign",
    category: "Campaigns",
    client: "The Dawn Nigeria",
    description: "Comprehensive event promotional strategy including promo teaser reels, graphic captions, and community engagement posts driving record attendance.",
    metric: "+85% Event Signups",
    thumbnail: "/images/dawn/2024-12-03_17-10-59_UTC_1.jpg",
    tags: ["Event Promotion", "Social Media", "Video Reels"],
    featured: true
  },
  {
    id: "proj-3",
    title: "The Dawn Sisters' Seminar 2026",
    category: "Social Media",
    client: "The Dawn Nigeria",
    description: "Multi-channel event promotion, speaker showcase reels, and interactive social media announcements created for The Dawn Sisters' Seminar.",
    metric: "10k+ Impressions",
    thumbnail: "/images/dawn/2026-07-02_16-34-26_UTC.jpg",
    tags: ["Event Promo", "Reel Edits", "Digital Media"],
    featured: true
  },
  {
    id: "proj-4",
    title: "Editorial & Writing Workshop Series",
    category: "Editorial",
    client: "The Dawn Nigeria",
    description: "Planned and hosted the inaugural Editorial Workshop while publishing recurring digital newsletters connecting community readers.",
    metric: "100% Hosted Workshop",
    thumbnail: "/images/dawn/2026-06-14_07-50-45_UTC.jpg",
    tags: ["Editorial", "Newsletter", "Workshop Hosting"],
    featured: false
  },
  {
    id: "proj-5",
    title: "Regional District Youth Activations",
    category: "Campaigns",
    client: "The Dawn Nigeria",
    description: "Digital campaign media, broadcast graphics, and engagement clips for regional district youth programs.",
    metric: "100+ Students Impacted",
    thumbnail: "/images/dawn/2026-05-18_12-13-50_UTC.jpg",
    tags: ["Community", "Event Promo", "Digital Content"],
    featured: false
  }
];

export const TOOL_BADGES: ToolBadge[] = [
  { id: "tool-capcut", name: "CapCut", iconName: "Video", color: "#000000", bg: "#f3f4f6", initialX: -120, initialY: -30 },
  { id: "tool-canva", name: "Canva", iconName: "Palette", color: "#00c4cc", bg: "#e0f7fa", initialX: -40, initialY: -50 },
  { id: "tool-premiere", name: "Premiere Pro", iconName: "Film", color: "#9999ff", bg: "#f3e8ff", initialX: 40, initialY: -40 },
  { id: "tool-photoshop", name: "Photoshop", iconName: "Image", color: "#31a8ff", bg: "#e0f2fe", initialX: 120, initialY: -20 },
  { id: "tool-word", name: "MS Word", iconName: "FileText", color: "#185abd", bg: "#dbeafe", initialX: -100, initialY: 30 },
  { id: "tool-instagram", name: "Instagram", iconName: "Instagram", color: "#e1306c", bg: "#fce7f3", initialX: -10, initialY: 20 },
  { id: "tool-notion", name: "Notion", iconName: "Layout", color: "#000000", bg: "#f3f4f6", initialX: 80, initialY: 35 },
  { id: "tool-audacity", name: "Audacity", iconName: "Mic", color: "#0000cc", bg: "#e0e7ff", initialX: 150, initialY: 10 }
];
