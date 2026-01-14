export interface ContactInfo {
  email: string;
  phone?: string;
  github: {
    url: string;
    username: string;
  };
  linkedin: {
    url: string;
    username: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  shortName: string;
  period: string;
  gpa: string | null;
  url: string | null;
}

export interface WorkExperience {
  title: string;
  company: string;
  shortName: string;
  period: string;
  location: string;
  description: string[];
  url: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface Publication {
  title: string;
  venue: string;
  paperNumber?: string;
  year: string;
}

export interface Project {
  name: string;
  technologies: string;
  description: string;
  period?: string;
  category?: string;
}

export interface Resume {
  filename: string;
  mobileMessage: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Navigation {
  sections: string[];
  navItems: NavItem[];
}

export interface Meta {
  title: string;
  greeting: string;
  contactHeading: string;
  contactSubtext: string;
}

export interface PortfolioData {
  contact: ContactInfo;
  education: Education[];
  workExperience: WorkExperience[];
  skills: Skills;
  projects: Project[];
  publications: Publication[];
  resume: Resume;
  navigation: Navigation;
  meta: Meta;
}
