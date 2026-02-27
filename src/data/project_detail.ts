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
    web?: string;
    app?: string;
    figma?: string;
    video?: string;
    paper?: string;
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
      "Developed the entire program and mobile application build, ensuring the apps ran as planned",
      "Presented the final results to the course instructor and the class with the team"
    ],

    techStack: ["Unity", "C#", "AR Foundation", "XR Plugin"],

    links: {
      app: "https://drive.google.com/file/d/1xmVjWhKSMj4Vw8ORHTKVhVe3qOQHOkAZ/view?usp=drive_link",
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

    techStack: ["Unity 3D", "C#", "Dekstop Game"],
    
    links: {
      app: "https://drive.google.com/file/d/1sWIDl7hu5cPGa-AqmKn-CWIrA1SgU3Wx/view?usp=drive_link",
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
      "Developed the complete program and animations, ensuring smooth gameplay",
      "Presented the final games to the course instructor and classmates with the partner",
      "Collaborated with a Visual Communication Design (DKV) student to create game assets in Blender",
      "Planned the storyline, missions, obstacles, UI design, and project report collaboratively with the partner"
    ],

    techStack: ["Unity 3D", "C#", "Blender", "Dekstop Game"],
    
    links: {
      app: "https://drive.google.com/file/d/1nrLJeu9bFzVVXzGCRMK2UvXiTUgy8id_/view?usp=drive_link",
      video: "https://drive.google.com/file/d/1jZLcidz-VABK3PLQIKCnVd-vTgp2RMpU/view?usp=drive_link"
    }
  },
  
  {
    id: "BigData-project",
    title: "Sentiment Classifier",
    category: "Machine Learning",

    year: "2025",
    semester: "6th Semester",
    teamSize: 5,
    role: "ML Engineer, Presenter",

    overview:
      "Developed a sentiment analysis classifier to detect review sentiment, analyze trends, and highlight key issues.",
    contributions: [
      "Collaborated with the team to discuss ideas, define objectives, and prepare the presentation",
      "Mined data and developed the entire program, ensuring the model performed as planned",
      "Presented the final results to the course instructor and class with the team"
    ],
    techStack: ["Python", "Pandas", "scikit-learn", "Jupyter Notebook"],
    
    impact: [
      "Provided insights into sentiment trends and frequently mentioned issues",
      "Identified features and services needing improvement based on user feedback",
      "appnstrated practical application of machine learning on large-scale review data"
    ]
  },

  {
    id: "custom-web-project",
    title: "Custom Event Website",
    category: "Web Development",
    
    year: "2024",
    semester: "paid project",
    teamSize: 4,
    role: "Full Stack Developer",

    overview:
      "Built an event website with full-stack development, supporting multiple user roles and cloud-based database hosting.",
    contributions: [
      "Collaborated on initial website design and prototype",
      "Developed back-end and front-end features using Bootstrap and SQL",
      "Implemented multiple user roles: guest, operator, admin, and master admin",
      "Participated in client meetings to present the monthly progress"
    ],

    techStack: ["HTML", "CSS", "Bootstrap", "SQL"],
    impact: ["Website is used frequently for recurring events", "Enabled efficient management with multiple user roles"],
    featured: true
  }, 

  {
    id: "undergaduate-thesis-project",
    title: "Undergraduate Thesis: Bell's Palsy and Stroke Classification",
    category: "Computer Vision",
    /* "UI/UX", "Web Development", "Computer Vision", "Machine Learning", "Game Development", "Translation", "Multimedia", "Other"; */

    year: "2025",
    semester: "7th Semester",
    teamSize: 1,
    role: "Sole Developer / Researcher",

    overview:
      "Developed a reproducible facial analysis workflow for Bell's Palsy and Stroke identification using interpretable SVM models.",
    contributions: [
      "Built a facial landmark extraction pipeline using MediaPipe FaceMesh",
      "Engineered asymmetry-based features and trained SVM (RBF) models with GridSearch optimization",
      "Identified limitations of static-image analysis and upper facial weakness patterns",
      "Implemented fully reproducible workflow in Python (VS Code) ensuring model interpretability"
    ],

    techStack: ["Python", "MediaPipe", "SVM", "Grid Search"],
    impact: ["Provided interpretable, reproducible pipeline suitable for clinical research"],
    links: {
      /* web: "https://identifikasi-bpst-mfm-svmgd.streamlit.app/", */
      video:"https://drive.google.com/file/d/192-EoPNnAe-fYXAGJUm2aVylDg99_zXT/view?usp=drive_link",
    }
  }, 
 
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",

    year: "2026",
    semester: "8th Semester",
    teamSize: 1,
    role: "Frontend Developer",

    overview:
      "Developed a personal portfolio website to showcase projects, skills, and experience. The site includes interactive tabs, animated project cards, and responsive layout.",

    contributions: [
      "Designed and implemented the overall site structure using Next.js App Router.",
      "Built reusable components like ProjectCard, Header, Tabs, and Footer.",
      "Created dynamic tabs for project categories with counters and smooth fade animations.",
      "Integrated CSS Modules for modular styling, ensuring theme consistency across pages.",
      "Implemented responsive layout for desktop and mobile devices.",
      "Optimized images and content for performance and SEO."
    ],

    techStack: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion", "Vercel"],

    impact: [
      "Portfolio serves as a  showcase for potential employers and collaborators.",
      "Demonstrates skills in modern web development and interactive UI design.",
      "Provides a scalable template for future projects and updates."
    ],

    links: {
      app: "https://chel-journey.vercel.app/"
    }
  },

  /* Template  
  {
    id: "xxx-project",
    title: "xxx",
    category: "Other",
    
    year: "2025",
    semester: "6th Semester",
    teamSize: 2,
    role: "xxx",

    overview:
      "xxx",
    contributions: [
      "xxx"
    ],

    techStack: [],
    
    impact: [],
    
    links: {
      app: "xxx"
    }
  }, */
]