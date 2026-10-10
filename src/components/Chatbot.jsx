
import { useState, useRef, useEffect } from "react";
import {
  Bot,
  UserRound,
  Send,
  X,
  Sparkles,
  MessageCircle,
  RotateCcw,
} from "lucide-react";

const profile = {
  name: "Radha Krishna Chalamalasetti",
  shortName: "Radha Krishna",

  education: {
    degree: "B.Tech in Computer Science and Engineering (IoT)",
    college:
      "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNR VJIET)",
    location: "Hyderabad, Telangana, India",
    graduation: 2029,
    cgpa: "9.7/10",
    intermediate: "985/1000",
    school: "9.8/10",
  },

  skills: {
    programming: ["C", "C++", "Python", "JavaScript"],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
    ],
    ai: [
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Arduino IDE",
    ],
    concepts: [
      "Data Structures and Algorithms",
      "DBMS",
      "CRUD operations",
      "API development",
      "Authentication concepts",
    ],
    interests: [
      "AI-powered applications",
      "Full-stack development",
      "Internet of Things",
      "Problem solving",
    ],
  },

  projects: [
    {
      name: "AI-Based Smart Farmer Procurement System",
      description:
        "A smart procurement workflow designed to reduce farmer waiting time and procurement-center congestion.",
      features: [
        "Multilingual farmer registration",
        "Intelligent slot allocation",
        "Token and queue management",
        "Procurement stage tracking",
        "Notifications",
        "Dynamic rebalancing",
      ],
      technologies: [
        "AI applications",
        "Slot allocation",
        "Queue management",
        "Notifications",
      ],
    },
    {
      name: "Campus Event Management",
      description:
        "A centralized campus event platform designed to simplify event discovery, registration, and participation through backend APIs and database operations.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST APIs",
        "Postman",
      ],
      features: [
        "Event management",
        "CRUD operations",
        "Input validation",
        "Middleware",
        "Authentication concepts",
        "Role-based access control concepts",
      ],
    },
    {
      name: "Real-Time AC Load Analyzer",
      description:
        "An ESP32-based IoT system for monitoring electrical parameters using current and voltage sensing, a local display, and remote monitoring.",
      technologies: [
        "ESP32",
        "SCT-013 current sensor",
        "ZMPT101B voltage sensor",
        "16x2 LCD",
        "Blynk",
      ],
      features: [
        "Electrical parameter monitoring",
        "Current and voltage sensing",
        "Local LCD display",
        "Remote monitoring",
      ],
    },
  ],

  achievements: [
    {
      title: "CargoIQ Ideathon",
      detail:
        "Won first place for an AI-powered logistics solution.",
    },
    {
      title: "Abode Hackathon",
      detail: "Qualified for Round 1.",
    },
    {
      title: "Reliance Foundation Undergraduate Scholarship",
      detail:
        "Selected for the undergraduate scholarship based on academic merit.",
    },
    {
      title: "Tata Imagination Challenge 2026",
      detail:
        "Participating in Round 3 according to the latest portfolio information.",
    },
  ],

  certifications: [
    {
      name: "IBM AI Engineering Professional Certificate",
      status: "In progress",
    },
  ],

  profiles: {
    github: "https://github.com/radhaviswam2008",
    linkedin:
      "https://www.linkedin.com/in/radha-krishna-ch-1133b5399/",
    leetcode: "https://leetcode.com/u/Radha_Krishna08/",
  },

  hobbies: ["Chess", "Table tennis", "Watching TV"],
};

const initialMessage = {
  role: "assistant",
  text: "Hi! 👋 I'm my portfolio assistant. Ask me about my name, academics, projects, skills, achievements, unique capabilities, or why I could be a good fit for a team.",
};

const suggestions = [
  "What makes me unique?",
  "Why should a company hire me?",
  "What are my unique capabilities?",
  "What is my CGPA?",
  "Tell me about my projects",
  "What are my achievements?",
];

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9+#.\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getAnswer(input) {
  const q = normalize(input);
  const has = (...words) =>
    words.some((word) => q.includes(word));

  // Identity
  if (
    has(
      "full name",
      "complete name",
      "your name",
      "my name",
      "who am i",
      "who is radha",
      "portfolio owner",
      "tell me your name",
      "what is the name",
      "whats your name",
      "what should i call you"
    )
  ) {
    return `My name is ${profile.name}. You can call me ${profile.shortName}. I am pursuing ${profile.education.degree} at VNR VJIET, Hyderabad.`;
  }

  if (/^(name|name please)$/.test(q)) {
    return `My name is ${profile.name}.`;
  }

  if (
    has(
      "tell me about yourself",
      "tell me about me",
      "about me",
      "introduce yourself",
      "introduce me",
      "about radha",
      "profile summary",
      "short introduction"
    )
  ) {
    return `My name is ${profile.name}. I am pursuing ${profile.education.degree} at VNR VJIET, Hyderabad, with a CGPA of ${profile.education.cgpa}.\n\nI am interested in AI applications, full-stack development, and IoT. My projects include Campus Event Management, Real-Time AC Load Analyzer, and AI-Based Smart Farmer Procurement System. I won first place in the CargoIQ Ideathon and was selected as a Reliance Foundation Undergraduate Scholar.`;
  }

  // Greetings and help
  if (
    /^(hi|hello|hey|hii|good morning|good afternoon|good evening)\b/.test(q)
  ) {
    return `Hello! Welcome to my portfolio. I am ${profile.name}. Ask me about my academics, projects, skills, achievements, or unique capabilities.`;
  }

  if (has("thank you", "thanks", "thanku")) {
    return "You're welcome! Feel free to ask me anything else about my portfolio.";
  }

  if (
    has("what can you do", "what can i ask", "help me", "help")
  ) {
    return "I can tell you about my name, academics, skills, projects, achievements, career interests, strengths, unique capabilities, and coding profiles. You can also ask recruiter-style questions such as 'Why should a company hire me?' or 'What makes me different?'.";
  }

  // Unique capabilities and differentiation
  if (
    has(
      "what makes me unique",
      "what makes you unique",
      "why am i unique",
      "unique capabilities",
      "unique ability",
      "unique abilities",
      "what makes me different",
      "why am i different",
      "how am i different",
      "different from other students",
      "different from others",
      "competitive advantage",
      "competitive advantages",
      "unique selling point",
      "unique selling proposition",
      "usp",
      "stand out",
      "standout"
    )
  ) {
    return `I believe my biggest differentiator is the combination of my academic consistency and my interest in applying technology to practical problems.\n\nHere is what makes my profile distinctive:\n\n• Strong academics: I have a CGPA of ${profile.education.cgpa} in CSE (IoT).\n\n• Interdisciplinary projects: I have worked on projects spanning backend development, IoT-based electrical monitoring, and an AI-based farmer procurement workflow.\n\n• Problem-oriented thinking: My project ideas focus on practical challenges, such as campus event coordination, electrical monitoring, and reducing waiting time at agricultural procurement centers.\n\n• Recognition: I won first place in the CargoIQ Ideathon and was selected as a Reliance Foundation Undergraduate Scholar.\n\n• Continuous learning: I am developing my skills in programming, backend technologies, AI, and full-stack development.\n\nI am still growing as a developer, but I want to stand out by turning what I learn into useful, working solutions.`;
  }

  if (
    has(
      "why should a company hire me",
      "why should you hire me",
      "why hire me",
      "why hire you",
      "hire me",
      "why should we select you",
      "why should we choose you",
      "why should i be selected",
      "why am i a good candidate",
      "why am i suitable",
      "why am i fit",
      "why should a recruiter hire me"
    )
  ) {
    return `I believe I could be a valuable candidate because I combine strong academics with practical project work and a willingness to learn.\n\n• My CGPA is ${profile.education.cgpa}, demonstrating academic consistency.\n\n• I have explored backend development using Node.js, Express.js, and MongoDB.\n\n• My projects span software development, AI-oriented problem solving, and IoT hardware.\n\n• Winning first place in the CargoIQ Ideathon gave me recognition for an AI-powered logistics solution.\n\n• I am interested in learning, collaborating, and building technology that solves real problems.\n\nAs a student, I am looking for opportunities where I can contribute, learn from experienced engineers, and grow into a stronger developer.`;
  }

  if (
    has(
      "my strengths",
      "your strengths",
      "personal strengths",
      "greatest strengths",
      "biggest strengths",
      "strongest qualities",
      "best qualities",
      "my qualities",
      "what am i good at",
      "what are my strengths"
    )
  ) {
    return `Based on my academic record, projects, and achievements, the strengths I can demonstrate are:\n\n• Academic consistency: CGPA of ${profile.education.cgpa}.\n\n• Technical curiosity: Exploring programming, backend development, AI, and IoT.\n\n• Practical problem solving: Building projects around real-world challenges.\n\n• Adaptability: Working across software and hardware-oriented projects.\n\n• Initiative: Participating in ideathons, hackathons, and learning programs.\n\nI want to keep strengthening these qualities through more development experience and teamwork.`;
  }

  if (
    has(
      "unique skills",
      "unique skill",
      "special skills",
      "special capability",
      "special capabilities",
      "what can i offer",
      "value can i bring",
      "value do i bring",
      "value to a team",
      "contribution to a team",
      "what do i bring"
    )
  ) {
    return `The value I aim to bring is a combination of software development fundamentals, interest in AI, and experience exploring IoT systems.\n\nI can contribute my current knowledge of C, C++, Python, JavaScript, Node.js, Express.js, and MongoDB, while continuing to develop my skills.\n\nMy projects have helped me explore both software workflows and hardware-based monitoring. I also enjoy approaching problems by thinking about the people who will use the solution, not just the technology behind it.`;
  }

  if (
    has(
      "what is my strongest technical area",
      "strongest technical area",
      "best technical area",
      "technical specialty",
      "specialization"
    )
  ) {
    return `My current areas of focus are backend development, AI-powered applications, and IoT. My Campus Event Management project explores backend APIs and databases, while my AC Load Analyzer explores hardware and electrical monitoring. I am continuing to develop my expertise rather than claiming mastery of one area.`;
  }

  if (
    has(
      "combine ai",
      "ai and iot",
      "ai full stack",
      "combination of skills",
      "interdisciplinary",
      "multiple domains",
      "different domains"
    )
  ) {
    return `I am interested in combining AI, full-stack development, and IoT to create practical applications. My projects reflect different parts of this interest: backend APIs and databases for Campus Event Management, hardware monitoring for the AC Load Analyzer, and intelligent scheduling concepts for the Smart Farmer Procurement System.\n\nMy goal is to keep developing these skills so I can build more complete solutions, from the user interface to the backend and connected devices.`;
  }

  if (
    has(
      "future goal",
      "future goals",
      "career goal",
      "career goals",
      "long term goal",
      "long term goals",
      "where do i see myself",
      "where do you see yourself",
      "future plans",
      "ambition",
      "ambitions"
    )
  ) {
    return `My goal is to become a strong software engineer who can build useful AI-powered applications and full-stack systems. I want to strengthen my data structures and algorithms, software engineering, backend development, and AI knowledge while building projects that solve real problems.\n\nI also want to gain practical experience through internships, collaborative projects, and technical challenges.`;
  }

  if (
    has(
      "biggest achievement",
      "proudest achievement",
      "most important achievement",
      "achievement i am proud",
      "what am i proud of",
      "proud of"
    )
  ) {
    return "One of my key achievements is winning first place in the CargoIQ Ideathon for an AI-powered logistics solution. I was also selected as a Reliance Foundation Undergraduate Scholar. These recognitions motivate me to continue learning and building useful solutions.";
  }

  if (
    has(
      "what makes my projects special",
      "what makes your projects special",
      "project unique",
      "projects unique",
      "project impact",
      "real world impact",
      "real world problems",
      "why are your projects important"
    )
  ) {
    return `I try to choose projects that address practical problems rather than focusing only on demonstrations.\n\n• Campus Event Management: focuses on organizing campus events and managing information through backend APIs and databases.\n\n• Real-Time AC Load Analyzer: explores electrical monitoring using sensors, an ESP32, a display, and remote monitoring.\n\n• AI-Based Smart Farmer Procurement System: focuses on scheduling, queue management, and reducing waiting time at procurement centers.\n\nTogether, these projects let me explore software, hardware, and problem-solving approaches.`;
  }

  if (
    has(
      "teamwork",
      "team player",
      "working in a team",
      "team contribution",
      "collaboration",
      "collaborate",
      "working with others"
    )
  ) {
    return "My project and hackathon work has encouraged me to think about how technical tasks contribute to a larger solution. I value clear communication, dividing work into manageable tasks, sharing progress, and learning from teammates. I want to continue improving these skills through collaborative development and internships.";
  }

  if (
    has(
      "weakness",
      "weaknesses",
      "area to improve",
      "areas to improve",
      "what should i improve",
      "what do i need to improve",
      "professional development"
    )
  ) {
    return "As a student, I am still developing my depth in software engineering, AI, and production-level development. I want to improve by solving more DSA problems, writing maintainable code, testing applications thoroughly, and building and deploying more complete projects. I see continuous learning as an important part of becoming a stronger engineer.";
  }

  if (
    has(
      "tell me something interesting",
      "interesting fact",
      "fun fact",
      "something about me",
      "summarize my profile",
      "quick summary",
      "elevator pitch"
    )
  ) {
    return `I am ${profile.name}, a CSE (IoT) student at VNR VJIET with a CGPA of ${profile.education.cgpa}. I enjoy exploring how software, AI, and connected devices can solve practical problems. My work ranges from campus event management and electrical monitoring to a smart farmer procurement workflow. I also won first place in the CargoIQ Ideathon and received the Reliance Foundation Undergraduate Scholarship.`;
  }

  // Academic performance
  if (
    has(
      "cgpa",
      "college gpa",
      "grade point",
      "academic score",
      "college score",
      "current gpa"
    )
  ) {
    return `My CGPA is ${profile.education.cgpa}. I am pursuing B.Tech in CSE (IoT) at VNR VJIET.`;
  }

  if (
    has(
      "intermediate",
      "class 12",
      "12th",
      "inter marks",
      "junior college",
      "class xii"
    )
  ) {
    return `My Class XII / Intermediate score is ${profile.education.intermediate}.`;
  }

  if (
    has(
      "class 10",
      "10th",
      "ssc",
      "school marks",
      "school score",
      "class x",
      "tenth marks"
    )
  ) {
    return `My Class X score is ${profile.education.school}.`;
  }

  if (
    has(
      "academic background",
      "education",
      "educational qualification",
      "studying",
      "college",
      "university",
      "degree",
      "branch",
      "graduation",
      "graduating",
      "which year",
      "which course"
    )
  ) {
    return `I am pursuing ${profile.education.degree} at ${profile.education.college}, ${profile.education.location}. My expected graduation year is ${profile.education.graduation}.\n\nMy academic scores:\n• CGPA: ${profile.education.cgpa}\n• Class XII: ${profile.education.intermediate}\n• Class X: ${profile.education.school}`;
  }

  // Individual projects
  if (
    has(
      "farmer",
      "procurement",
      "sih",
      "smart farmer",
      "agriculture project"
    )
  ) {
    const p = profile.projects[0];

    return `My project is ${p.name}.\n\n${p.description}\n\nKey features:\n${p.features
      .map((feature) => `• ${feature}`)
      .join("\n")}\n\nThe goal is to reduce waiting time and congestion at procurement centers through improved scheduling, queue management, and notifications.`;
  }

  if (
    has(
      "campus event",
      "event management",
      "college event",
      "backend project",
      "mongodb project"
    )
  ) {
    const p = profile.projects[1];

    return `My project is ${p.name}.\n\n${p.description}\n\nTechnologies: ${p.technologies.join(", ")}.\n\nFeatures and concepts: ${p.features.join(", ")}.\n\nThe project focuses on managing event information and data through backend APIs and database operations.`;
  }

  if (
    has(
      "ac load",
      "load analyzer",
      "electrical",
      "esp32",
      "iot project",
      "current sensor",
      "voltage sensor",
      "blynk"
    )
  ) {
    const p = profile.projects[2];

    return `My project is ${p.name}.\n\n${p.description}\n\nTechnologies and components:\n${p.technologies
      .map((technology) => `• ${technology}`)
      .join("\n")}\n\nKey features:\n${p.features
      .map((feature) => `• ${feature}`)
      .join("\n")}`;
  }

  if (
    has(
      "all projects",
      "list projects",
      "my projects",
      "projects",
      "portfolio projects",
      "built",
      "developed"
    )
  ) {
    return `My portfolio features three projects:\n\n${profile.projects
      .map(
        (project, index) =>
          `${index + 1}. ${project.name}\n${project.description}`
      )
      .join("\n\n")}\n\nAsk me about any project for more details.`;
  }

  // Programming languages
  if (
    has(
      "programming language",
      "programming languages",
      "coding languages",
      "which languages",
      "languages does",
      "languages known"
    )
  ) {
    return `My programming languages are ${profile.skills.programming.join(", ")}.`;
  }

  // Technical skills
  if (
    has(
      "technical skills",
      "tech stack",
      "technology stack",
      "technologies",
      "skills",
      "expertise"
    )
  ) {
    return `Here are my technical skills:\n\nProgramming: ${profile.skills.programming.join(", ")}\n\nBackend and databases: ${profile.skills.backend.join(", ")}\n\nAI and ML: ${profile.skills.ai.join(", ")}\n\nTools: ${profile.skills.tools.join(", ")}\n\nCore concepts: ${profile.skills.concepts.join(", ")}\n\nInterests: ${profile.skills.interests.join(", ")}\n\nThese are my listed skills and areas of interest, not a claim of professional-level expertise in every technology.`;
  }

  if (
    has(
      "artificial intelligence",
      "machine learning",
      "generative ai",
      "llm",
      "rag"
    )
  ) {
    return `My AI-related knowledge areas and interests include ${profile.skills.ai.join(", ")}. I am also exploring AI-oriented project ideas, including my Smart Farmer Procurement System.`;
  }

  if (
    has(
      "backend",
      "node",
      "express",
      "database",
      "mongodb",
      "mongoose",
      "rest api",
      "api development"
    )
  ) {
    return `My backend and database technologies include ${profile.skills.backend.join(", ")}. My Campus Event Management project explores backend APIs, database operations, validation, and related development concepts.`;
  }

  // Achievements
  if (
    has("cargo", "ideathon", "first place", "winner", "winning")
  ) {
    return "I won first place in the CargoIQ Ideathon for an AI-powered logistics solution.";
  }

  if (has("abode", "hackathon")) {
    return "I qualified for Round 1 of the Abode Hackathon. I also won first place in the CargoIQ Ideathon.";
  }

  if (
    has("reliance", "scholarship", "scholar", "undergraduate scholar")
  ) {
    return "I was selected for the Reliance Foundation Undergraduate Scholarship based on academic merit.";
  }

  if (has("tata", "imagination challenge")) {
    return "I am participating in the Tata Imagination Challenge 2026 and am currently in Round 3, according to my latest portfolio information.";
  }

  if (
    has(
      "achievement",
      "achievements",
      "awards",
      "accomplishments",
      "recognition"
    )
  ) {
    return `Here are my listed achievements:\n\n${profile.achievements
      .map(
        (achievement, index) =>
          `${index + 1}. ${achievement.title}\n${achievement.detail}`
      )
      .join("\n\n")}`;
  }

  // Certification
  if (
    has(
      "ibm",
      "certification",
      "certifications",
      "certificate",
      "certificates",
      "coursera"
    )
  ) {
    return `My certification is ${profile.certifications[0].name}.\nStatus: ${profile.certifications[0].status}.\n\nI am still working on completing it; it is not yet completed.`;
  }

  // Coding profiles
  if (
    has("github", "source code", "repositories", "repository")
  ) {
    return `My GitHub profile is:\n${profile.profiles.github}\n\nYou can explore my repositories and project code there.`;
  }

  if (
    has("leetcode", "coding profile", "problem solving profile")
  ) {
    return `My LeetCode profile is:\n${profile.profiles.leetcode}\n\nYou can explore my coding practice and problem-solving profile there.`;
  }

  if (has("linkedin", "professional profile")) {
    return `My LinkedIn profile is:\n${profile.profiles.linkedin}`;
  }

  if (
    has(
      "profile links",
      "social links",
      "online profiles",
      "coding profiles",
      "all links"
    )
  ) {
    return `Here are my online profiles:\n\nGitHub: ${profile.profiles.github}\n\nLinkedIn: ${profile.profiles.linkedin}\n\nLeetCode: ${profile.profiles.leetcode}`;
  }

  // Hobbies
  if (
    has(
      "hobbies",
      "hobby",
      "free time",
      "interests outside",
      "personal interests"
    )
  ) {
    return `My hobbies include ${profile.hobbies.join(", ")}. My technical interests include ${profile.skills.interests.join(", ")}.`;
  }

  // Contact
  if (
    has("contact", "email", "phone number", "reach me", "get in touch")
  ) {
    return `You can connect with me through LinkedIn:\n${profile.profiles.linkedin}\n\nYou can also explore my work on GitHub:\n${profile.profiles.github}`;
  }

  // Resume
  if (has("resume", "cv", "curriculum vitae")) {
    return "You can access my resume from the Resume section of this portfolio. It includes my academic background, projects, skills, and achievements.";
  }

  return "I don't have a specific answer for that in my current portfolio knowledge base. Try asking about my name, CGPA, Intermediate marks, unique capabilities, strengths, projects, achievements, career goals, or coding profiles.";
}

export default function Chatbot({ open, setOpen }) {
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  function sendMessage(text = input) {
    const question = text.trim();

    if (!question || typing) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: question },
    ]);

    setInput("");
    setTyping(true);

    const answer = getAnswer(question);

    setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        { role: "assistant", text: answer },
      ]);
      setTyping(false);
    }, 350);
  }

  function resetChat() {
    setMessages([initialMessage]);
    setInput("");
    setTyping(false);
  }

  

if (!open) {
  return (
    
<button
  type="button"
  onClick={() => setOpen(true)}
  aria-label="Open AI assistant"
  className="fixed bottom-10 right-5 z-[100] flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full bg-[#22221F] text-[#F4F0E8] shadow-xl transition duration-300 hover:scale-105 hover:bg-[#515B49]"
>
  <MessageCircle size={30} />
  <span className="mt-1 text-[11px] font-medium">
    Ask AI
  </span>
</button>

  );
}



  return (
    <section
      aria-label="Portfolio assistant"
      className="fixed bottom-4 right-4 z-[200] flex h-[min(600px,calc(100dvh-32px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-[24px] border border-black/10 bg-[#FCFAF5] text-[#22221F] shadow-2xl"
    >
      <header className="flex items-center justify-between bg-[#22221F] px-4 py-4 text-[#F4F0E8]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C5D3BB] text-[#22221F]">
            <Bot size={22} />
          </div>

          <div>
            <p className="text-sm font-semibold">
              Portfolio Assistant
            </p>
            <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/65">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A3B18A]" />
              Ready to answer your questions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={resetChat}
            aria-label="Reset conversation"
            title="Reset conversation"
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            <RotateCcw size={16} />
          </button>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chatbot"
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            <X size={19} />
          </button>
        </div>
      </header>

      <div
        className="flex-1 space-y-4 overflow-y-auto px-3 py-4 sm:px-4"
        aria-live="polite"
      >
        {messages.map((message, index) => (
          <div
            key={`${index}-${message.role}`}
            className={`flex items-start gap-2 ${
              message.role === "user"
                ? "flex-row-reverse"
                : "flex-row"
            }`}
          >
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                message.role === "user"
                  ? "bg-[#DCCBF2] text-[#382A4A]"
                  : "bg-[#C5D3BB] text-[#263222]"
              }`}
            >
              {message.role === "user" ? (
                <UserRound size={15} />
              ) : (
                <Sparkles size={15} />
              )}
            </div>

            <div
              className={`max-w-[84%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-3 text-[13px] leading-[1.65] ${
                message.role === "user"
                  ? "rounded-tr-md bg-[#22221F] text-white"
                  : "rounded-tl-md border border-black/[0.06] bg-white text-[#33332F]"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C5D3BB]">
              <Bot size={15} />
            </div>

            <div className="flex gap-1 rounded-2xl rounded-tl-md bg-white px-4 py-4">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8A887F]"
                  style={{
                    animationDelay: `${dot * 120}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {messages.length === 1 && (
        <div className="px-3 pb-3 sm:px-4">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#858477]">
            Ask me anything
          </p>

          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                type="button"
                key={suggestion}
                onClick={() => sendMessage(suggestion)}
                className="rounded-full border border-[#D9D8CF] bg-white px-3 py-2 text-left text-[11px] text-[#45453F] transition hover:border-[#A3B18A] hover:bg-[#F0F2EA]"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage();
        }}
        className="border-t border-black/[0.08] bg-[#F7F5EF] p-3"
      >
        <div className="flex items-center gap-2 rounded-full border border-[#DEDDD4] bg-white py-1.5 pl-4 pr-1.5 transition focus-within:border-[#A3B18A] focus-within:ring-2 focus-within:ring-[#A3B18A]/20">
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about me, my skills..."
            aria-label="Ask the portfolio assistant"
            className="min-w-0 flex-1 bg-transparent py-2 text-[13px] text-[#22221F] outline-none placeholder:text-[#99978E]"
          />

          <button
            type="submit"
            disabled={!input.trim() || typing}
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#22221F] text-white transition hover:bg-[#515B49] disabled:cursor-not-allowed disabled:opacity-35"
          >
            <Send size={15} />
          </button>
        </div>

        <p className="mt-2 text-center text-[9px] text-[#99978E]">
          Answers are based on my portfolio information.
        </p>
      </form>
    </section>
  );
}
