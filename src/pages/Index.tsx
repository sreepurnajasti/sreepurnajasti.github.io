import React, { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import SectionFadeIn from "@/components/SectionFadeIn";
import { Twitter, Linkedin } from "lucide-react";

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
    desc: "Led the rebuild of bilingual public and intranet sites for the Social Sciences and Humanities Research Council, implementing WCAG 2.1 accessibility, AEM workflows, and a performant, secure backend.",
    tech: ["AEM", "WCAG", "Government Standards", "Accessibility"],
    image: "https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "SurveyMonkey Insight Platform",
    desc: "Engineered next-gen market-research dashboards with React, TypeScript, REST, and GraphQL, cutting payloads and page-load times by 20%.",
    tech: ["React", "TypeScript", "GraphQL", "REST", "AI/ML"],
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Slice Labs Serverless Insurance Suite",
    desc: "Built an end-to-end policy-issuance platform using React & Node.js, powered a USD 10M business launch with serverless AWS and automated deployments.",
    tech: ["React", "Node.js", "AWS", "Serverless"],
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
  const [heroTitle, setHeroTitle] = React.useState("Building intelligent experiences that scale across multi-cloud");

  useEffect(() => {
    // Typewriter effect on hero headline
    setTimeout(() => {
      typeWriterEffect("Building intelligent experiences that scale across multi-cloud", setHeroTitle, 42);
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
        <h2 className="section-title text-3xl md:text-4xl heading-gradient mb-8 font-bold text-center">Signature Projects</h2>
        <div className="projects-showcase grid md:grid-cols-3 gap-10 mt-3">
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className="project-card bg-glass border border-white/15 rounded-2xl overflow-hidden relative transition-transform"
              style={{ animationDelay: `${i * 0.1 + 0.35}s` }}
            >
              <img src={proj.image} alt={proj.title} className="project-image h-[160px] w-full object-cover" />
              <div className="project-content p-6">
                <h3 className="project-title text-lg font-semibold heading-gradient mb-2">{proj.title}</h3>
                <div className="text-light opacity-85 text-base mb-3">{proj.desc}</div>
                <div className="project-tech mt-1 text-primary/80 font-medium text-sm">
                  {proj.tech.join(', ')}
                </div>
              </div>
            </div>
          ))}
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

      {/* Contact Section */}
      <SectionFadeIn className="section pt-12 pb-20" id="contact">
        <div className="contact bg-glass rounded-2xl px-6 py-14 md:px-12 md:py-16 border border-primary/20 shadow-glow max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="section-title text-3xl md:text-4xl heading-gradient mb-4 font-extrabold">I'm always up for a chat.</h2>
            <p className="text-lg opacity-85">
              Pop me an email at <a href="mailto:sreepurna.jasti@gmail.com" className="font-semibold text-primary hover:underline">sreepurna.jasti@gmail.com</a>.
            </p>
          </div>
        </div>
      </SectionFadeIn>

      <div className="text-center opacity-80 text-sm py-7">
        © {new Date().getFullYear()} Sreepurna Jasti
      </div>
    </>
  );
}
