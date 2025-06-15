import React, { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import SectionFadeIn from "@/components/SectionFadeIn";
import ContactForm from "@/components/ContactForm";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

function typeWriterEffect(txt: string, setter: (s: string) => void, speed = 150) {
  let idx = 0;
  let current = "";
  setter("");
  function type() {
    if (idx < txt.length) {
      current += txt.charAt(idx);
      setter(current);
      idx++;
      setTimeout(type, speed);
    }
  }
  type();
}

const experiences = [
  {
    role: "Web Master – SSHRC",
    impact: "Modernised a bilingual government portal, enforcing WCAG 2.1 and boosting site performance by 25%.",
  },
  {
    role: "Senior Dev + PM – NCR Services",
    impact: "Architected microservices on AWS, cut release cycles from 4 weeks to 1 week, mentored 5 junior engineers.",
  },
  {
    role: "Senior Dev – SurveyMonkey",
    impact: "Introduced GraphQL layer that improved data fetch speed by 20%.",
  },
  {
    role: "Full-stack – Slice Labs",
    impact: "Built serverless insurance platform that enabled a 10M USD product launch.",
  },
];

const skills = [
  {
    icon: "🧠",
    title: "AI & ML",
    items: "LangChain, OpenAI, Vertex AI, Hugging Face"
  },
  {
    icon: "☁️",
    title: "Cloud",
    items: "Azure, AWS, Firebase, Docker, Kubernetes"
  },
  {
    icon: "⚛️",
    title: "Front End",
    items: "React, Next, Tailwind CSS, Three.js, WebGL"
  },
  {
    icon: "🔗",
    title: "Back End",
    items: "Node.js, TypeScript, GraphQL, REST, .NET"
  },
  {
    icon: "🚢",
    title: "DevOps",
    items: "GitHub Actions, Terraform, Helm"
  },
  {
    icon: "🤝",
    title: "Leadership",
    items: "Scrum Master, Project Budgeting, Stakeholder Comms"
  },
];

const projects = [
  {
    title: "SSHRC Digital Modernization",
    desc: "Led the rebuild of bilingual public and intranet sites for the Social Sciences and Humanities Research Council, implementing WCAG 2.1 accessibility, Adobe Experience Manager workflows, and a new backend that meets Government of Canada security and performance standards.",
    tech: ["AEM", "WCAG", "Government Standards", "Accessibility"],
  },
  {
    title: "NCR Microservice Re-architecture",
    desc: "Directed a suite of high-traffic retail projects on AWS, designing a modular microservice pattern in React, TypeScript, and Node.js. Performance optimizations and rigorous test coverage improved overall project quality by 30% while shortening release cycles.",
    tech: ["AWS", "React", "Node.js", "TypeScript", "Microservices"],
  },
  {
    title: "SurveyMonkey Insight Platform",
    desc: "Engineered next-gen market-research dashboards with React, TypeScript, REST, and GraphQL, cutting payloads and page-load times by 20%.",
    tech: ["React", "TypeScript", "GraphQL", "REST", "AI/ML"],
  },
  {
    title: "Slice Labs Serverless Insurance Suite",
    desc: "Built an end-to-end policy-issuance platform using React & Node.js, powered a USD 10M business launch with serverless AWS and automated deployments.",
    tech: ["React", "Node.js", "AWS", "Serverless"],
  },
];

const philosophies = [
  {
    heading: "Human-First AI",
    text: "Technology succeeds only when users feel heard. I embed accessibility and ethics into every sprint.",
  },
  {
    heading: "Design as Dialogue",
    text: "Interfaces should talk, guide, and delight. Motion, depth, and micro-copy are my vocabulary.",
  },
  {
    heading: "Cloud Without Borders",
    text: "Workloads deserve the best home. Vendor neutrality and IaC keep solutions portable and future-proof.",
  }
];

export default function Index() {
  const [heroTitle, setHeroTitle] = React.useState("Building intelligent experiences that scale across clouds");

  useEffect(() => {
    // Typewriter effect on hero headline
    setTimeout(() => {
      typeWriterEffect("Building intelligent experiences that scale across clouds", setHeroTitle, 42);
    }, 700);
  }, []);

  // Scroll/anchor navigation smooth scrolling
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const navHandler = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const el = document.querySelector(a.getAttribute("href")!);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
    anchors.forEach(a => a.addEventListener("click", navHandler));
    return () => anchors.forEach(a => a.removeEventListener("click", navHandler));
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-30 px-[5%] py-6 bg-glass border-b border-white/10">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          <a href="#hero" className="logo font-bold text-2xl heading-gradient select-none animate-logoGlow cursor-pointer">sree</a>
          <ul className="hidden md:flex gap-8 font-medium tracking-wide">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero min-h-screen flex items-center justify-center relative text-center">
        <div className="hero-content z-10 mt-20 md:mt-0">
          <h1 className="hero-title text-[clamp(2.5rem,7vw,5rem)] font-bold heading-gradient mb-3 animate-fadeInUp">
            {heroTitle}
          </h1>
          <h2 className="hero-subtitle text-2xl font-light opacity-85 mb-5 animate-fadeInUp"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            From full-stack craft to multi-cloud AI architecture, I transform bold ideas into secure, accessible products that users love.
          </h2>
          <a href="#contact" className="cta-button transition-all text-lg mt-6 font-semibold">
            Let’s design the future together
          </a>
        </div>
      </section>

      {/* About */}
      <SectionFadeIn className="section max-w-2xl mx-auto pt-32 pb-14" id="about">
        <h2 className="section-title text-3xl md:text-4xl heading-gradient mb-8 font-bold text-center">About</h2>
        <div className="text-lg leading-8 text-center opacity-90">
          I am <span className="font-semibold">Sreepurna Jasti</span>, a developer-turned-architect who speaks the languages of React, Node, and Python as fluently as Azure and AWS.
          <br className="hidden md:inline" />
          For eight years I have shipped web and desktop applications, led cross-functional teams, and mastered the art of translating vision into code.
          <br className="hidden md:inline" />
          My next chapter focuses on architecting AI-first systems that are reliable, ethical, and human-centred.
        </div>
      </SectionFadeIn>

      {/* Experience */}
      <SectionFadeIn className="section pt-10" id="experience">
        <h2 className="section-title text-3xl md:text-4xl heading-gradient mb-8 font-bold text-center">Experience Highlights</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, i) => (
            <div key={exp.role}
              className="skill-card bg-glass rounded-2xl border border-white/15 p-6 transition-transform relative hover:shadow-glow"
              style={{ animationDelay: `${i * 0.14 + 0.25}s` }}
            >
              <div className="font-bold text-lg mb-1 heading-gradient">{exp.role}</div>
              <div className="text-light opacity-85 font-normal text-base">{exp.impact}</div>
            </div>
          ))}
        </div>
      </SectionFadeIn>

      {/* Skills */}
      <SectionFadeIn className="section pt-10" id="skills">
        <h2 className="section-title text-3xl md:text-4xl heading-gradient mb-8 font-bold text-center">Core Skills</h2>
        <div className="skills-grid grid md:grid-cols-3 gap-8 mt-5">
          {skills.map((skill, i) => (
            <div
              key={skill.title}
              className="skill-card bg-glass border rounded-2xl py-6 px-7 flex flex-col items-center transition-transform"
              style={{ animationDelay: `${i * 0.09 + 0.23}s` }}
            >
              <div className="skill-icon text-4xl mb-2">{skill.icon}</div>
              <h3 className="skill-title text-lg font-semibold mb-1 heading-gradient">{skill.title}</h3>
              <div className="text-light/80 text-center text-base">{skill.items}</div>
            </div>
          ))}
        </div>
      </SectionFadeIn>

      {/* Signature Projects */}
      <SectionFadeIn className="section pt-10" id="projects">
        <h2 className="section-title text-3xl md:text-4xl heading-gradient mb-8 font-bold text-center">
          Signature Projects
        </h2>
        <div className="projects-showcase grid md:grid-cols-2 gap-10 mt-3">
          {/* SSHRC Digital Modernization */}
          <div
            className="project-card bg-glass border border-white/15 rounded-2xl overflow-hidden relative transition-transform"
            style={{ animationDelay: `0.35s` }}
          >
            <div
              className="project-image h-[120px] md:h-[160px] bg-gradient-to-tr from-[#23b6fd] via-[#ff4bee] to-[#ff7c40]"
              style={{
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            />
            <div className="project-content p-6">
              <h3 className="project-title text-lg font-semibold mb-2">
                <span className="font-bold text-[#11b1d7]">SSHRC</span>{" "}
                <span className="font-normal text-white">Digital </span>
                <span className="font-bold text-[#ff4675]">Modernization</span>
              </h3>
              <div className="text-light opacity-85 text-base mb-3">
                Led the rebuild of bilingual public and intranet sites for the Social Sciences and Humanities Research Council, 
                implementing WCAG 2.1 accessibility, Adobe Experience Manager workflows, and a new backend that meets Government of Canada security and performance standards.
              </div>
              <div className="project-tech flex flex-wrap gap-2 mt-1">
                <span className="tech-tag bg-[#0f0136] text-[#69eaff] border-0 font-medium">AEM</span>
                <span className="tech-tag bg-[#124afa] text-white border-0 font-medium">WCAG</span>
                <span className="tech-tag bg-[#21efa6] text-black border-0 font-medium">Government Standards</span>
                <span className="tech-tag bg-[#ff4bee] text-white border-0 font-medium">Accessibility</span>
              </div>
            </div>
          </div>

          {/* NCR Microservice Re-architecture */}
          <div
            className="project-card bg-glass border border-white/15 rounded-2xl overflow-hidden relative transition-transform"
            style={{ animationDelay: `0.45s` }}
          >
            <div
              className="project-image h-[120px] md:h-[160px] bg-gradient-to-tr from-[#15fde9] via-[#2b87ff] to-[#a365fc]"
              style={{
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            />
            <div className="project-content p-6">
              <h3 className="project-title text-lg font-semibold mb-2">
                <span className="font-bold text-[#25f0e5]">NCR</span>{" "}
                <span className="font-normal text-white">Microservice </span>
                <span className="font-bold text-[#fa37af]">Re-architecture</span>
              </h3>
              <div className="text-light opacity-85 text-base mb-3">
                Directed a suite of high-traffic retail projects on AWS, designing a modular microservice pattern in React, TypeScript, and Node.js. Performance optimizations and rigorous test coverage improved overall project quality by 30% while shortening release cycles.
              </div>
              <div className="project-tech flex flex-wrap gap-2 mt-1">
                <span className="tech-tag bg-[#18ceef] text-black border-0 font-medium">AWS</span>
                <span className="tech-tag bg-[#3d30b2] text-white border-0 font-medium">React</span>
                <span className="tech-tag bg-[#36c5f0] text-black border-0 font-medium">Node.js</span>
                <span className="tech-tag bg-[#f76929] text-white border-0 font-medium">TypeScript</span>
                <span className="tech-tag bg-[#3aeba7] text-black border-0 font-medium">Microservices</span>
              </div>
            </div>
          </div>

          {/* SurveyMonkey Insight Platform */}
          <div
            className="project-card bg-glass border border-white/15 rounded-2xl overflow-hidden relative transition-transform"
            style={{ animationDelay: `0.55s` }}
          >
            <div
              className="project-image h-[120px] md:h-[160px] bg-gradient-to-tr from-[#fbbf24] via-[#5e8cff] to-[#67fdec]"
              style={{
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            />
            <div className="project-content p-6">
              <h3 className="project-title text-lg font-semibold mb-2">
                <span className="font-bold text-[#fac700]">SurveyMonkey</span>{" "}
                <span className="font-normal text-white">Insight </span>
                <span className="font-bold text-[#3fa5ff]">Platform</span>
              </h3>
              <div className="text-light opacity-85 text-base mb-3">
                Engineered next-generation market-research dashboards with React, TypeScript, REST, and GraphQL. The new data layer cut payload sizes and raised page-load performance by 20%, delivering faster insights to millions of survey users.
              </div>
              <div className="project-tech flex flex-wrap gap-2 mt-1">
                <span className="tech-tag bg-[#ffa800] text-black border-0 font-medium">React</span>
                <span className="tech-tag bg-[#4bbaff] text-black border-0 font-medium">TypeScript</span>
                <span className="tech-tag bg-[#b4c0ff] text-black border-0 font-medium">GraphQL</span>
                <span className="tech-tag bg-[#19e6cb] text-black border-0 font-medium">REST</span>
                <span className="tech-tag bg-[#206791] text-white border-0 font-medium">AI/ML</span>
              </div>
            </div>
          </div>

          {/* Slice Labs Serverless Insurance Suite */}
          <div
            className="project-card bg-glass border border-white/15 rounded-2xl overflow-hidden relative transition-transform"
            style={{ animationDelay: `0.65s` }}
          >
            <div
              className="project-image h-[120px] md:h-[160px] bg-gradient-to-tr from-[#7effb2] via-[#17cfd0] to-[#4160f9]"
              style={{
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            />
            <div className="project-content p-6">
              <h3 className="project-title text-lg font-semibold mb-2">
                <span className="font-bold text-[#10cb87]">Slice Labs</span>{" "}
                <span className="font-normal text-white">Serverless </span>
                <span className="font-bold text-[#235efc]">Insurance Suite</span>
              </h3>
              <div className="text-light opacity-85 text-base mb-3">
                Built an end-to-end policy-issuance platform using React and Node.js, backed by serverless AWS services. The product powered a USD 10 million business launch and maintains high availability through automated cloud deployments.
              </div>
              <div className="project-tech flex flex-wrap gap-2 mt-1">
                <span className="tech-tag bg-[#6cfcc3] text-black border-0 font-medium">React</span>
                <span className="tech-tag bg-[#22919b] text-white border-0 font-medium">Node.js</span>
                <span className="tech-tag bg-[#58dceb] text-black border-0 font-medium">AWS</span>
                <span className="tech-tag bg-[#eafffc] text-black border-0 font-medium">Serverless</span>
              </div>
            </div>
          </div>
        </div>
      </SectionFadeIn>

      {/* Philosophy */}
      <SectionFadeIn className="section pt-10" id="philosophy">
        <h2 className="section-title text-3xl md:text-4xl heading-gradient mb-8 font-bold text-center">Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map(p => (
            <div key={p.heading} className="bg-glass rounded-2xl border border-white/10 px-7 py-8 shadow-glow fade-in-section text-center">
              <div className="text-lg heading-gradient font-bold mb-2">{p.heading}</div>
              <div className="text-light/80">{p.text}</div>
            </div>
          ))}
        </div>
      </SectionFadeIn>

      {/* Contact (Form) */}
      <SectionFadeIn className="section pt-12 pb-20" id="contact">
        <div className="contact bg-glass rounded-2xl px-6 py-14 border border-primary/20 shadow-glow max-w-2xl mx-auto">
          <h2 className="section-title text-3xl md:text-4xl heading-gradient mb-5 font-extrabold text-center">Ready to elevate your product with cloud-scale AI?</h2>
          <div className="text-center text-base opacity-85 mb-8">
            Schedule a chat and tell me what you’d like to build! I’ll personally get back to you within a business day.
          </div>
          <ContactForm />
        </div>
      </SectionFadeIn>

      <div className="text-center opacity-80 text-sm py-7">
        © {new Date().getFullYear()} Sreepurna Jasti
      </div>
    </>
  );
}
