export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  links: {
    github?: string;
    live?: string;
    pypi?: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
  category: 'web' | 'ml' | 'system' | 'research';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  type: 'work' | 'education';
  achievements: string[];
  technologies?: string[];
  cgpa?: string;
}

export interface Skill {
  category: string;
  skills: string[];
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  metric?: string;
}

export const personalInfo = {
  name: "Arjun Deshmukh",
  title: "Software Engineer",
  email: "desh.arjun3@gmail.com",
  location: "Washim, Maharashtra, India",
  github: "github.com/ZEUS33776",
  leetcode: "leetcode.com/u/ZEUS_7",
  linkedin: "linkedin.com/in/arjun-deshmukh-8a45842a5",
  bio: "Passionate Software Engineer with expertise in full-stack development, AI/ML, and system design. Currently pursuing B.Tech in Computer Science at IIIT Kottayam.",
  tagline: "Building the future with code and creativity"
};

export const projects: Project[] = [
  {
    id: "vcs-core",
    title: "VCS-Core",
    description: "Distributed Version Control System",
    longDescription: "A lightweight distributed version control system built from scratch as an open-source Python package. Implements core Git operations with advanced file tracking algorithms and comprehensive CLI interface.",
    technologies: ["Python", "PyPI", "CLI", "File Hashing", "Git Protocol", "SHA-256"],
    features: [
      "100% compatibility with core Git operations",
      "Advanced file tracking with SHA-256 hashing",
      "Delta compression and tree data structures",
      "15+ Git-compatible commands",
      "40% reduced storage overhead",
      "99.9% data integrity",
      "Complete documentation and unit tests"
    ],
    links: {
      github: "https://github.com/ZEUS33776/vcs",
      pypi: "https://pypi.org/project/vcs-core/"
    },
    stats: [
      { label: "Storage Reduction", value: "40%" },
      { label: "Data Integrity", value: "99.9%" },
      { label: "Git Commands", value: "15+" }
    ],
    category: "system"
  },
  {
    id: "lyfline",
    title: "Lyfline",
    description: "AI-Powered Heart Attack Prediction",
    longDescription: "Comprehensive heart condition prediction system combining multiple machine learning models with real-time patient monitoring capabilities and secure hospital database integration.",
    technologies: ["Python", "Machine Learning", "React", "Node.js", "PostgreSQL"],
    features: [
      "87% accuracy for new patient risk assessment",
      "97% accuracy for monitoring admitted patients",
      "Real-time alert capabilities",
      "25% reduction in detection time",
      "HIPAA-compliant data protection",
      "Role-based access control",
      "Intuitive web-based dashboard",
      "40% faster decision making"
    ],
    links: {
      github: "https://github.com/ZEUS33776/lyfline",
      live: "https://lyfline.onrender.com/"
    },
    stats: [
      { label: "New Patient Accuracy", value: "87%" },
      { label: "Admitted Patient Accuracy", value: "97%" },
      { label: "Detection Time Reduction", value: "25%" }
    ],
    category: "ml"
  },
  {
    id: "placement-portal",
    title: "Institute Placement Portal",
    description: "Modern React-based placement management system",
    longDescription: "Comprehensive institutional placement portal with modern React architecture, featuring role-based access control and streamlined workflow management for students, coordinators, and administrators. Will be officially used by the college in upcoming placement drives.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Streamlined placement workflow",
      "JWT authentication system",
  
      "Role-based access control",
      "Secure recruitment data protection",
      "Will be officially used by college"
    ],
    links: {
      github: "https://github.com/ZEUS33776/placement-portal-iiitk"
    },
    stats: [
      { label: "Students to be registered", value: "500+" },
      { label: "Authentication", value: "JWT" }
    ],
    category: "web"
  }
];

export const experience: Experience[] = [
  {
    id: "xcdify",
    company: "Xcdify Solutions Private Limited",
    position: "Software Engineering Intern",
    location: "Bengaluru, Karnataka (Remote)",
    duration: "Dec 2024 – Present",
    type: "work",
    achievements: [
      "Engineered enterprise-grade Vehicle Routing Problem (VRP) solution optimizing logistics for 50+ vehicles",
      "Reduced transportation costs by 20% and improved operational efficiency by 35%",
      "Developed dbt-powered analytics platform with 10+ modular data transformation pipelines",
      "Enhanced processing speed by 40% and enabled real-time operational insights",
      "Implemented 50+ SQL transformations, automating workflows and reducing manual reporting overhead by 60%",
      "Presented technical outcomes to 10+ cross-functional stakeholders across 5 agile sprints"
    ],
    technologies: ["Python", "dbt", "SQL", "Data Engineering", "VRP Optimization", "Analytics"]
  },
  {
    id: "iiit-kottayam",
    company: "Indian Institute of Information Technology, Kottayam",
    position: "Bachelor of Technology in Computer Science and Engineering",
    location: "Kottayam, Kerala",
    duration: "Nov 2022 – March 2026",
    type: "education",
    achievements: [
      "Active participation in competitive programming and algorithm optimization"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL", "Bash"],
    icon: "code"
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Three.js"],
    icon: "monitor"
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs"],
    icon: "server"
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS", "GCP", "Firebase", "Supabase"],
    icon: "database"
  },
  {
    category: "AI & Machine Learning",
    skills: ["Scikit-Learn", "TensorFlow", "Pandas", "NumPy", "LangChain", "RAG", "NLP", "Deep Learning"],
    icon: "brain"
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Redis Queue", "DBT", "Shell Scripting"],
    icon: "tool"
  }
];

export const achievements: Achievement[] = [
  {
    title: "Major Projects",
    description: "Built and deployed 8+ major full-stack applications",
    metric: "8+"
  },
  {
    title: "Open Source Contribution",
    description: "Published VCS-Core to PyPI with 1000+ potential users worldwide",
    metric: "1000+"
  }
];

export const research = {
  title: "Advanced Analysis of the Maximum Subarray Problem (2D)",
  duration: "Oct 2023 – Nov 2023",
  description: "Conducted rigorous analysis of the 2D maximum subarray problem, exploring optimization strategies beyond the current O(n³-ε) time complexity.",
  achievements: [
    "Achieved 15% runtime improvement in specific cases",
    "Investigated theoretical limits through mathematical proofs",
    "Produced technical report on optimization techniques",
    "Presented research to faculty and peers"
  ],
  github: "https://github.com/ZEUS33776/2d-max-subarray-research"
};
