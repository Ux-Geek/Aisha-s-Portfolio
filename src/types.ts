export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badgeBg: string;
  badgeTextColor: string;
  badgeLetter: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Video Editing' | 'Social Media' | 'Campaigns' | 'Editorial';
  client: string;
  description: string;
  metric?: string;
  thumbnail: string;
  tags: string[];
  videoUrl?: string;
  featured?: boolean;
}

export interface PhotoCard {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  rotateDeg: number;
  tag: string;
}

export interface ToolBadge {
  id: string;
  name: string;
  iconName: string;
  color: string;
  bg: string;
  initialX: number;
  initialY: number;
}
