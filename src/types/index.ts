export interface Challenge {
  id: string;
  number: string;
  category: string;
  title: string;
  ngoName: string;
  ngoLocation: string;
  summary: string;
  problemStatement: string;
  targetBeneficiaries: string;
  keyDeliverables: string[];
  suggestedStack: string[];
  impactMetric: string;
  accentColor: string;
  bgGradient: string;
  stickerText: string;
  rotation: string;
}

export interface TimelineNode {
  id: string;
  phase: string;
  title: string;
  date: string;
  time: string;
  description: string;
  status: 'upcoming' | 'active' | 'completed';
  tag: string;
}

export interface ImpactCategory {
  id: string;
  iconName: string;
  category: string;
  heading: string;
  description: string;
  ngoPartner: string;
  metric: string;
  metricLabel: string;
  quote: string;
  quoteAuthor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'teams' | 'judging' | 'logistics';
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  role: string;
  experienceLevel: string;
  teamStatus: 'solo' | 'have_team' | 'need_team';
  teamName?: string;
  preferredChallengeId: string;
  githubUrl?: string;
  portfolioUrl?: string;
  motivation: string;
}
