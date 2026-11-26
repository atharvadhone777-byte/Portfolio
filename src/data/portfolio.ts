import resume from "./resume-data.json";// Add your real media URLs here. Empty values never render broken images.
export const assets: Record<string, string> = {
  PROFILE_PHOTO: "",
  PERSONAL_PHOTO_02: "",
  DECORATIVE_PHOTO_01: "",
  ABOUT_PHOTO: "",
  GRIDWISE_MAIN_DASHBOARD: "",
  GRIDWISE_ANALYTICS_SCREENSHOT: "",
  GRIDWISE_ARCHITECTURE_IMAGE: "",
  ZAIKA_MAIN_SCREEN: "",
  ZAIKA_RECIPE_SCREEN: "",
  ZAIKA_ARCHITECTURE: "",
  CHAT_ANALYZER_DASHBOARD: "",
  CHAT_ANALYZER_WORDCLOUD: "",
  COLLEGE_PHOTO: "",
  MUSIC_PHOTO_01: "",
  MUSIC_PHOTO_02: "",
};
export const identity = {
  name: "Atharva Dhone",
  email: "atharvadhone777@gmail.com",
  phone: "+91-8180035445",
  location: "India",
  githubUrl: "https://github.com/atharvadhone777-byte",
  linkedinUrl: "https://www.linkedin.com/in/atharva-dhone-a88b55382",
};
export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  problem: string;
  approach: string;
  implementation: string;
  images: string[];
  githubUrl: string;
  demoUrl: string;
  note: string;
};
export const projects: Project[] = [
  {
    id: "gridwise",
    number: "001",
    title: "GridWise AI",
    category: "MACHINE LEARNING / FULL STACK",
    tagline: "A little intelligence. A lot less wasted energy.",
    description:
      "Smart electricity demand forecasting using historical household power consumption data.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
    ],
    features: [
      "LSTM-based forecasting of household electricity consumption for the next 24 hours.",
      "Interactive energy analytics with consumption trends and actual vs. predicted usage.",
      "Peak-hour detection and estimated electricity bills.",
      "Anomaly detection and actionable energy-saving recommendations.",
    ],
    problem:
      "How can historical consumption patterns help households anticipate demand and understand their energy usage?",
    approach:
      "Use a time-series forecasting pipeline to connect historical household power consumption with practical, understandable analytics.",
    implementation:
      "An LSTM model built with TensorFlow and Keras powers a FastAPI service. A Next.js and TypeScript interface presents the forecasts and energy trends using Recharts.",
    images: [
      "GRIDWISE_MAIN_DASHBOARD",
      "GRIDWISE_ANALYTICS_SCREENSHOT",
      "GRIDWISE_ARCHITECTURE_IMAGE",
    ],
    githubUrl: "https://github.com/atharvadhone777-byte/Voltora",
    demoUrl: "",
    note: "From patterns to predictions. ↗",
  },
  {
    id: "zaika",
    number: "002",
    title: "Zaika AI",
    category: "AI / SEMANTIC SEARCH",
    tagline: "Good food starts with what you already have.",
    description:
      "An AI-powered recipe recommendation and cooking assistant that finds recipes from available ingredients.",
    tech: ["Python", "TensorFlow", "FastAPI", "FAISS", "React", "Tailwind CSS", "Docker"],
    features: [
      "Dual-encoder embedding model trained with in-batch InfoNCE loss.",
      "Recipe ranking evaluated using precision@k, recall@k and MRR.",
      "Retrieval-augmented cooking assistant.",
      "Ingredient substitution and dietary adaptation.",
      "FAISS-indexed vector search pipeline.",
      "22 integration tests validated against the trained model.",
    ],
    problem:
      "What can you cook with the ingredients already in your kitchen, without relying on exact keyword matches?",
    approach:
      "Learn ingredient and recipe embeddings, retrieve relevant recipes through vector search, and use those results to ground a cooking assistant.",
    implementation:
      "A TensorFlow dual-encoder model trained with InfoNCE loss feeds a FAISS index. FastAPI serves retrieval and assistant functionality to a React interface, with Docker for packaging.",
    images: ["ZAIKA_MAIN_SCREEN", "ZAIKA_RECIPE_SCREEN", "ZAIKA_ARCHITECTURE"],
    githubUrl: "https://github.com/atharvadhone777-byte/Zaika-AI",
    demoUrl: "",
    note: "A recipe for a smarter kitchen!",
  },
  {
    id: "chat",
    number: "003",
    title: "WhatsApp Chat Analyzer",
    category: "DATA ANALYTICS / PYTHON",
    tagline: "Every conversation has a story in the data.",
    description:
      "Turning WhatsApp chat exports into meaningful visual insights, one message at a time.",
    tech: ["Python", "Streamlit", "Pandas", "Matplotlib", "WordCloud", "Regex"],
    features: [
      "Regex-based chat parsing engine.",
      "Message, word and media statistics.",
      "Word clouds and emoji usage analysis.",
      "Monthly, daily and weekly activity timelines.",
      "Individual and group activity insights.",
    ],
    problem:
      "How can a plain-text chat export reveal patterns in communication and group activity?",
    approach:
      "Parse unstructured exports into structured records, aggregate them with Pandas, and explore the results through visual analysis.",
    implementation:
      "A Regex-based parsing engine structures messages for Pandas analysis. Streamlit provides an interactive interface, with Matplotlib charts and WordCloud visualizations.",
    images: ["CHAT_ANALYZER_DASHBOARD", "CHAT_ANALYZER_WORDCLOUD"],
    githubUrl: "https://github.com/atharvadhone777-byte/WhatsApp_Chat_Analyser",
    demoUrl: "",
    note: "Finding stories between the lines.",
  },
];
export const profiles = [
  {
    platform: "Codeforces",
    handle: "Atharva_dhone7",
    url: "https://codeforces.com/profile/Atharva_dhone7",
  },
  {
    platform: "Codeforces",
    handle: "Celestial_11",
    url: "https://codeforces.com/profile/Celestial_11",
  },
  {
    platform: "CodeChef",
    handle: "atharva_dhone",
    url: "https://www.codechef.com/users/atharva_dhone",
  },
  { platform: "LeetCode", handle: "Atharva_Dhone", url: "https://leetcode.com/u/Atharva_Dhone/" },
];
export const cp = {
  total: "1200+",
  codeforcesProblems: "800+",
  otherProblems: "400+",
  codeforcesRating: 1272,
  codechefRating: 1537,
  codeforces: [
    { rank: 2535, contest: "Round 1119 · Div. 3" },
    { rank: 4424, contest: "Round 1117" },
    { rank: 5119, contest: "Educational Round 193" },
    { rank: 5232, contest: "Round 1121" },
  ],
  codechef: [
    { rank: 371, contest: "Starters 219 · Div. 4" },
    { rank: 972, contest: "Starters 229 · Div. 3" },
    { rank: 1093, contest: "Starters 251 · Div. 3" },
    { rank: 1219, contest: "Starters 230 · Div. 3" },
    { rank: 1371, contest: "Starters 255 · Div. 3" },
  ],
  hackerrank: { rank: 2063, contest: "HackerRank Orchestrate", date: "October 2026" },
};
export const education = {
  institution: "Indian Institute of Information Technology, Lucknow",
  degree: "B.Tech — Computer Science and Artificial Intelligence",
  period: "August 2025 – May 2029",
  gpa: 9.12,
  location: "Lucknow, Uttar Pradesh, India",
  coursework: [
    "Data Structures",
    "Object Oriented Programming",
    "Database Management Systems",
    "Computer Organization and Architecture",
    "Theory of Automata",
  ],
  mainPercentile: 99.16,
  mainRank: 12967,
  advancedRank: 13465,
};
export const toolbox = [
  {
    title: "Programming languages",
    label: "01 / THE FOUNDATIONS",
    tools: [
      ["C", "c"],
      ["C++", "cplusplus"],
      ["JavaScript", "javascript"],
      ["Python", "python"],
      ["Java", "java"],
    ],
  },
  {
    title: "Frameworks & libraries",
    label: "02 / THE BUILDING BLOCKS",
    tools: [
      ["React", "react"],
      ["Spring Boot", "spring"],
      ["TensorFlow", "tensorflow"],
      ["Keras", "keras"],
      ["FastAPI", "fastapi"],
      ["Streamlit", "streamlit"],
    ],
  },
  {
    title: "Tools & platforms",
    label: "03 / THE EVERYDAY ESSENTIALS",
    tools: [
      ["MySQL", "mysql"],
      ["VS Code", "vscode"],
      ["IntelliJ", "intellij"],
      ["Git", "git"],
      ["GitHub", "github"],
      ["Docker", "docker"],
    ],
  },
];
export const chapters = [
  { id: "intro", label: "Intro", number: "01" },
  { id: "about", label: "About", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "cp", label: "CP", number: "04" },
  { id: "skills", label: "Skills", number: "05" },
  { id: "journey", label: "Journey", number: "06" },
  { id: "contact", label: "Contact", number: "08" },
];
