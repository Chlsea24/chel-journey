export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  tags?: string[];
};

export type TimelineGroup = {
  id: string;          // for navigation / linking
  name: string;        // displayed name
  items: TimelineItem[];
};

export const timelines: TimelineGroup[] = [
  {
    id: "JO",
    name: "Job & Organization Journey",
    items: [
      {
        year: "2014",
        title: "Start Exploring Languages",
        description: "Enroll Mandarin Course in Ebenezer Learning Centre.",
        tags: ["Hobby", "Translation", "Study"]
      },
      {
        year: "2014 - 2015",
        title: "Member of English Club",
        description: "Studying English and participated in Spelling Bee Competition.",
        tags: ["Hobby", "Organization"]
      },
      {
        year: "2015 - 2020",
        title: "Personal Secretary",
        description: "Assisted Family Rent Car's owner to write rental agreement letter for clients.",
        tags: ["Job", "Hobby"]
      },
      {
        year: "2016 - 2018",
        title: "President of Mawar Saron JHS Student Council Representation (SRC)",
        description: "Collaborated with the full team and teacher adviser to lead school programs, annual events, and ad-hoc activities for 2 periods.",
        tags: ["Leadership", "Organization"]
      },
      {
        year: "2020-2021",
        title: "Member of Journalism Club",
        description: "Interviewing important figures and write article news for SMA Xaverius Bandarlampung events.",
        tags: ["Hobby", "Organization"]
      },
      {
        year: "2021 - now",
        title: "Start Remote Freelance Job",
        description: "Collaborated with international and cross-functional remote teams in translating manhuas and games as well as ensuring proper tone & linguistic flow in the target language: CHN-ENG, CHN-INA, ENG-INA",
        tags: ["Job", "Translation"]
      },
      {
        year: "2022 - 2023",
        title: "Member of Informatics Student Association, BIOS",
        description: "Collaborated with the team to organize annual leadership events.",
        tags: ["Leadership", "Organization"]
      },
      {
        year: "2023 - 2024",
        title: "Treasurer of Informatics Student Association, BIOS",
        description: "Managed and ensured the security and integrity of the cash fund and collaborated with secretary in write report documents.",
        tags: ["Leadership", "Organization"]
      },
    ],
  },

  {
    id: "tech",
    name: "Tech Journey",
    items: [
      {
        year: "2010",
        title: "Start Exploring Technology",
        description: "Studying and learning technology & common softwares at home and Mawar Saron School.",
        tags: ["Tech", "Study"]
      },
      {
        year: "2015",
        title: "Start Learn Adobe Photoshop and Filmora",
        description: "Studying and learning design & editing tools at home and Mawar Saron School.",
        tags: ["Tech", "Study"]
      },
      {
        year: "2017 - 2018",
        title: "Joined Robotics Club",
        description: "Studying and learning basic IoT and robots for children at Mawar Saron Junior High School.",
        tags: ["Tech", "Study"]
      },
      {
        year: "2022",
        title: "Start Learning Programming",
        description: "Learning basic to advanced Programming from experienced highschool classmates and college.",
        tags: ["Tech", "Study"]
      },
      {
        year: "2025",
        title: "Undergraduate Thesis: Stroke vs Bell’s Palsy Classification",
        description: "Built CV pipeline with SVM & MFM landmark extraction optimized with Grid Search.",
        tags: ["Tech", "Thesis"]
      },
    ],
  },

  {
    id: "competition",
    name: "Competition Journey",
    items: [
      {
        year: "2014",
        title: "Chess Turnament - 1",
        description: "Participate in O2SN - Chess Turnament at sub-district level. Won 2nd Runner-Up",
        tags: ["Hobby", "Competition"]
      },
      {
        year: "2015",
        title: "Chess Turnament - 2",
        description: "Participate in O2SN - Chess Turnament at sub-district level. Won 2nd Place",
        tags: ["Hobby", "Competition"]
      },
      {
        year: "2016",
        title: "Spelling Bee",
        description: "Participate in Spelling Bee Compeition held by English First.",
        tags: ["Hobby", "Competition"]
      },
      {
        year: "2021",
        title: "Olympiad of Mathematics and physics EPSILON 2021",
        description: "Participate in OMICRON held by Gadjah Mada University.",
        tags: ["Hobby", "Competition"]
      },
      {
        year: "2024",
        title: "Blood Donation Web Design Competition",
        description: "Participate in Website & System Design Competition for undergraduate students. Won 1st place and advanced to Web Development progress.",
        tags: ["Hobby", "Competition"]
      },
    ],
  },
];