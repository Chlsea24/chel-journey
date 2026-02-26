// Project Category Type
export type Category =
  | "UI/UX"
  | "Web Development"
  | "Computer Vision"
  | "Machine Learning"
  | "Game Development"
  | "Translation"
  | "Multimedia";


// Project Type Definition
export type Project = {
  id: string;
  title: string;
  category: Category;

  year: string;
  semester: string;

  teamSize: number;
  role: string;

  overview: string;

  contributions: string[];
  techStack: string[];

  impact?: string[];

  links?: {
    github?: string;
    demo?: string;
    figma?: string;
    video?: string;
  };

  featured?: boolean;
};


// Dummy Project Data
export const projects: Project[] = [
  {
    id: "stroke-bells-classification",
    title: "Stroke vs Bell’s Palsy Classification",
    category: "Computer Vision",

    year: "2025",
    semester: "Final Year",
    teamSize: 1,
    role: "Machine Learning Engineer",

    overview:
      "A computer vision system designed to differentiate Stroke and Bell’s Palsy using facial asymmetry analysis and classical machine learning.",

    contributions: [
      "Designed facial landmark normalization pipeline",
      "Engineered asymmetry-based numerical features",
      "Implemented SVM with RBF kernel",
      "Performed GridSearch hyperparameter tuning",
      "Evaluated model using accuracy, precision, recall, and confusion matrix"
    ],

    techStack: ["Python", "MediaPipe", "Scikit-learn", "SVM", "GridSearch"],

    impact: [
      "Achieved 91% classification accuracy",
      "Improved baseline model performance by 12%"
    ],

    links: {
      github: "https://github.com/your-repo-link"
    },

    featured: true
  },

  {
    id: "xxx-prediction",
    title: "Retail Sales Prediction Model",
    category: "Machine Learning",

    year: "2024",
    semester: "4th Semester",
    teamSize: 3,
    role: "Data Analyst & ML Engineer",

    overview:
      "A predictive model built to analyze sales patterns across outlet types and forecast future performance.",

    contributions: [
      "Performed exploratory data analysis in Excel and Python",
      "Engineered categorical and numerical features",
      "Built regression and classification models",
      "Compared model performance using cross-validation"
    ],

    techStack: ["Python", "Pandas", "Scikit-learn", "Excel"],

    impact: [
      "Identified top-performing outlet types",
      "Improved prediction stability through feature selection"
    ],

    links: {
      github: "https://github.com/your-repo-link"
    }
  },

  {
    id: "3D Game: Dadang Galaxy",
    title: "3D Platformer Adventure Game",
    category: "Game Development",

    year: "2023",
    semester: "3rd Semester",
    teamSize: 2,
    role: "Game Programmer",

    overview:
      "A 2D side-scrolling platformer game prototype developed as a team project with physics-based mechanics.",

    contributions: [
      "Implemented player movement and physics system",
      "Developed enemy AI behavior scripts",
      "Integrated scoring and health systems",
      "Optimized gameplay performance"
    ],

    techStack: ["Unity", "C#", "Game Design Principles"],

    links: {
      demo: "https://your-game-demo-link"
    },

    featured: true
  },

  {
    id: "mobile-app-ui-design",
    title: "Mobile Health App UI/UX Design",
    category: "UI/UX",

    year: "2023",
    semester: "3rd Semester",
    teamSize: 2,
    role: "UI Designer",

    overview:
      "A user-centered mobile health tracking app prototype designed with accessibility and usability principles.",

    contributions: [
      "Conducted user persona research",
      "Designed wireframes and interactive prototype",
      "Applied accessibility-focused color system",
      "Improved navigation flow based on feedback"
    ],

    techStack: ["Figma", "User Research", "Wireframing"],

    links: {
      figma: "https://figma-link.com"
    }
  },

  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",

    year: "2025",
    semester: "Final Year",
    teamSize: 1,
    role: "Frontend Developer",

    overview:
      "A responsive portfolio website built to showcase multi-disciplinary projects with dynamic filtering system.",

    contributions: [
      "Developed responsive layout using Next.js",
      "Implemented category filter tabs system",
      "Designed modular component structure",
      "Optimized SEO metadata"
    ],

    techStack: ["Next.js", "TypeScript", "CSS Modules"],

    links: {
      demo: "https://your-portfolio-link.com"
    }
  },

  {
    id: "game-localization-project",
    title: "Indie Game Localization",
    category: "Translation",

    year: "2022",
    semester: "2nd Semester",
    teamSize: 5,
    role: "Game Translator",

    overview:
      "Localized in-game dialogues and UI text from English to Indonesian for an indie RPG project.",

    contributions: [
      "Translated over 500 in-game dialogue lines",
      "Ensured cultural adaptation accuracy",
      "Maintained terminology consistency",
      "Collaborated with narrative designer"
    ],

    techStack: ["Localization", "Game Narrative Design"]
  },

  {
    id: "short-film-production",
    title: "Short Film Production Project",
    category: "Multimedia",

    year: "2022",
    semester: "2nd Semester",
    teamSize: 6,
    role: "Video Editor",

    overview:
      "A short cinematic video project focused on storytelling and visual composition.",

    contributions: [
      "Edited video using professional editing software",
      "Performed color grading and audio balancing",
      "Structured narrative pacing",
      "Delivered final production for public screening"
    ],

    techStack: ["Adobe Premiere", "Color Grading", "Storyboarding"],

    links: {
      video: "https://youtube-link.com"
    }
  }
]