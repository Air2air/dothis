/* eslint-disable no-use-before-define */
// User model
interface User {
  id: string;
  username: string;
  email: string;
  socialProfiles: SocialProfile[];
  interests: Interest[];
  connections: User[];
  badges: Badge[];
  points: number;
}

// SocialProfile model
interface SocialProfile {
  id: string;
  platform: string; // e.g., 'Facebook', 'Twitter', 'Instagram'
  handle: string;
  profileLink: string;
}

// Interest model
interface Interest {
  id: string;
  name: string;
  category: string;
}

// Badge model
interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// Content model
interface Content {
  id: string;
  type: string; // e.g., 'blog post', 'video', 'artwork', 'social media snippet'
  creator: User;
  title: string;
  description: string;
  link: string;
  likes: User[];
  tags: string[];
}

// Recommendation model
interface Recommendation {
  id: string;
  content: Content;
  recommendedFor: User;
  reason: string; // e.g., 'Based on your interest in X', 'Liked by users you follow'
}

// UserBehavior model
interface UserBehavior {
  id: string;
  user: User;
  action: string; // e.g., 'click', 'like', 'share'
  content: Content;
  timestamp: Date;
}
