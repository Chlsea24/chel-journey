// Project Category Type
export type Category =
  | "UI/UX"
  | "Web Development"
  | "Computer Vision"
  | "Machine Learning"
  | "Game Development"
  | "Translation"
  | "Multimedia"
  | "Other";


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


// Project Data
export const projects: Project[] = [
  /*
  {
    id: "civic-video",
    title: "Civic Project: Short Inspirational Video",
    category: "Multimedia",

    year: "2023",
    semester: "2nd Semester",
    teamSize: 7,
    role: "Scriptwriter, Director, Editor",

    overview:
      "A short inspirational video for university student, created as a Civic Project.",

    contributions: [
      "Wrote all scripts and dialogues for each team member as Scriptwriter",
      "Directed actors and cameramen during filming as Director",
      "Edited raw footage into the final video as Editor"
    ],

    techStack: ["Filmora", "Video Editing", "Director"],

    impact: [
      "Enhanced teamwork and multimedia production management skills"
    ],

    links: {
      github: "https://github.com/your-repo-link"
    },

    featured: false
  },*/

  {
    id: "benkyoo-app",
    title: "Benkyoo - Japanese Learning App",
    category: "UI/UX",

    year: "2024",
    semester: "4th Semester",
    teamSize: 7,
    role: "Core Team Member / Project Lead",

    overview:
      "A prototype Japanese learning application developed as a college final exam project for Human-Computer Interaction. The project aims to design an engaging Japanese language recognition system for early teens, offering interactive and gamified features that motivate continuous learning.",

    contributions: [
      "Designed high-fidelity components and wireframes in Figma",
      "Collaborated with core team members to design the application prototype",
      "Presented monthly development updates to the course instructor and class",
      "Led discussions on business plans, unique features, and key design elements",
      "Coordinated team activities and ensured project quality through quality checks"
    ],

    techStack: ["Figma", "User Research", "Wireframing", "High-Fidelity Prototyping"],

    impact: [
      "Created an interactive and gamified learning experience to engage early teen learners",
      "Enhanced motivation and interest in learning Japanese using technology-based methods",
      "Improved team collaboration, quality control, and prototyping skills"
    ],

    links: {
      figma: "https://www.figma.com/design/TOQynZKNWdVjPkHWTCURsD/Salinan_EduLearn-Mobile-UI-Kit?node-id=7-211&t=kSZ04z16yyNoHmjV-1"    }
  },

  {
    id: "Dadang-Snowhill",
    title: "AR App: Dadang Snowhill",
    category: "Game Development",

    year: "2024",
    semester: "5th Semester",
    teamSize: 4,
    role: "AR Unity Programmer",

    overview:
      "College final exam project in Markerless VR/AR programming, involving the design and development of AR app, Dadang Snowhill, focusing on interactive missions, obstacles, and engaging UI.",

    contributions: [
      "Collaborated with the team to plan the storyline, missions, obstacles, UI design, and project report",
      "Developed the entire program and application build, ensuring the apps ran as planned",
      "Presented the final results to the course instructor and the class with the team"
    ],

    techStack: ["Unity", "C#", "AR Foundation", "Visual Studio"],

    links: {
      demo: "https://drive.google.com/file/d/1xmVjWhKSMj4Vw8ORHTKVhVe3qOQHOkAZ/view?usp=drive_link",
      video: "https://drive.google.com/file/d/18gpQ-WQJqXnhfKXyr3EC6-0DSmJfYRlM/view?usp=drive_link"
    },

    featured: false
  },

  {
    id: "hanzigo-app",
    title: "HanziGo - Chinese Learning App",
    category: "UI/UX",

    year: "2025",
    semester: "6th Semester",
    teamSize: 6,
    role: "UI/UX Designer",

    overview:
      "Designed the prototype of HanziGo, a Chinese learning application, as a college final exam project, focusing on intuitive user experience and interactive features.",

    contributions: [
      "Improved navigation flow based on feedback",
      "Designed components, wireframes and interactive prototype",
      "Collaborated with core team members to design the application prototype",
      "Led discussions on business plans, unique features, and other key elements",
      "Presented monthly development updates to the course instructor and class with the team"      
    ],

    techStack: ["Figma", "User Research", "Wireframing", "High-Fidelity Prototyping"],

    links: {
      figma: "https://www.figma.com/proto/5RSkeEfDRxvNDHvcD2FH52/HanziGo?node-id=490-7040&p=f&t=LtRDSHQW4heCCi3e-0&scaling=scale-down&content-scaling=fixed&page-id=490%3A6068&starting-point-node-id=490%3A7040&show-proto-sidebar=1"
    }
  },

  {
    id: "Asylum-333-project",
    title: "3D Offline Game: Asylum 333",
    category: "Game Development",

    year: "2025",
    semester: "6th Semester",
    teamSize: 2,
    role: "Game Programmer & Designer",

    overview:
      "Developed offline local games as college Final Assignment project, focusing on engaging storylines, missions, obstacles, and interactive UI design.",

    contributions: [
      "Planned the storyline, missions, obstacles, UI design, and project report collaboratively with a partner",
      "Developed the complete program and animations, ensuring smooth gameplay",
      "Presented the final games to the course instructor and classmates with the partner"
    ],

    techStack: ["Unity 3D", "C#", "Game Architecture"],
    
    impact: ["Successfully completed a college-level game project demonstrating full development workflow"],
    links: {
      demo: "https://drive.google.com/file/d/1sWIDl7hu5cPGa-AqmKn-CWIrA1SgU3Wx/view?usp=drive_link",
      video: "https://drive.google.com/file/d/1HnW32BAmr67XgLOkS_-6PwnZ6YBIjsAB/view?usp=drive_link"
    }
  },

  {
    id: "Temple-333-project",
    title: "3D Offline Game: Temple 333",
    category: "Game Development",

    year: "2025",
    semester: "6th Semester",
    teamSize: 2,
    role: "Game Programmer & Designer",

    overview:
      "Developed offline local games as college Final Exam project, focusing on engaging storylines, missions, obstacles, and interactive UI design.",

    contributions: [
      "Planned the storyline, missions, obstacles, UI design, and project report collaboratively with a partner",
      "Developed the complete program and animations, ensuring smooth gameplay",
      "Presented the final games to the course instructor and classmates with the partner"
    ],

    techStack: ["Unity 3D", "C#", "Game Architecture"],
    
    impact: ["Successfully completed a college-level game project demonstrating full development workflow"],
    links: {
      demo: "https://drive.google.com/file/d/1nrLJeu9bFzVVXzGCRMK2UvXiTUgy8id_/view?usp=drive_link",
      video: "https://drive.google.com/file/d/1jZLcidz-VABK3PLQIKCnVd-vTgp2RMpU/view?usp=drive_link"
    }
  },
/*
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
  } */
]