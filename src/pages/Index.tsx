import { ArrowUpRight, Mail, Phone, Linkedin, GraduationCap, Briefcase, Sparkles, FileDown, Award, BadgeCheck } from "lucide-react";
import portrait from "@/assets/gali-portrait.jpeg";

const experience = [
  {
    org: "African Burial Ground Memorial Foundation",
    role: "Web Development & Cybersecurity Intern",
    period: "Jun 2026 — Present",
    bullets: [
      "Strengthening website security for licensed content and e-commerce.",
      "Researching and outlining curriculum contextualizing the African Burial Ground for NYC schools.",
      "Advancing and promoting the site and history of the largest African cemetery in North America.",
    ],
  },
  {
    org: "St. John's University School of Law",
    role: "Information Technology Support Assistant",
    period: "Apr 2026 — Present",
    bullets: [
      "Provide technical assistance to Law School students.",
      "On-call technician for real-time IT incidents and ticketed support requests.",
      "Collaborate with full-time IT staff to maintain high service standards in a fast-paced academic environment.",
    ],
  },
  {
    org: "Handshake",
    role: "AI Fellowship",
    period: "Dec 2025 — Feb 2026",
    bullets: [
      "Hands-on training and evaluation of machine learning and AI models.",
      "Worked with large datasets and refined model performance to improve efficiency.",
    ],
  },
  {
    org: "St. John's University",
    role: "Student Ambassador",
    period: "Aug 2025 — Present",
    bullets: [
      "Engage with campus events and support large-scale initiatives like Open Houses.",
      "Guide prospective families on detailed campus tours with clear, concise information.",
      "Address inquiries during major events with strong communication and customer service.",
    ],
  },
  {
    org: "St. John's R.I.S.E. Network",
    role: "Network Leader (Mentor)",
    period: "Jun 2024 — Present",
    bullets: [
      "Support an empowerment initiative aimed at increasing graduation rates among students of color.",
      "Mentor freshmen with essential information for college success, fostering academic confidence.",
    ],
  },
];

const certifications = [
  {
    name: "ServiceDesk Training",
    issuer: "St. John's University",
    issued: "Apr 2026",
    skills: ["Cybersecurity Incident Response", "IT Troubleshooting", "Security Protocols"],
  },
  {
    name: "Information Security Policies — 900 Series",
    issuer: "St. John's University",
    issued: "Apr 2026",
    skills: ["Information Security"],
  },
  {
    name: "PII Security Training",
    issuer: "St. John's University",
    issued: "Apr 2026",
    skills: ["Risk Management", "Data Security"],
  },
  {
    name: "Core Security Training",
    issuer: "St. John's University",
    issued: "Oct 2025",
    skills: ["Cybersecurity", "Cyber Defense", "Malware Detection"],
  },
  {
    name: "Google IT Support Specialization",
    issuer: "Google",
    issued: "Mar 2025",
    credentialId: "X695F3GJ3MZG",
    skills: ["IT Service Management", "Information Technology Training", "IT Hardware Support", "Information Technology"],
  },
];

const awards = [
  {
    title: "2nd Place — Technology & Computer Science Case Competition",
    issuer: "Future Business Leaders of America (FBLA)",
    date: "Mar 2026",
    description:
      "Analyzed a real-world Naval Surface Warfare Center Carderock case and designed AEGIS — an AI-assisted programming governance framework with human-in-the-loop oversight, bias mitigation, and validation safeguards. Presented a research-backed solution integrating cybersecurity, systems engineering, and ethical AI to a panel of judges.",
  },
  {
    title: "10th Place — Technology & Computer Science Case Competition",
    issuer: "FBLA National Leadership Conference",
    date: "Jun 2025",
    description:
      "Represented St. John's University on a four-person team tackling Runwayz, a career-development platform for non-degree pathways. Delivered a proposal combining mobile-first UX, machine learning, and behavioral analytics — featuring gamified onboarding, AI career-path prediction, sentiment analysis, and retention tools — earning a Top 10 national finish.",
  },
  {
    title: "4th Place — Public Speaking",
    issuer: "FBLA New Jersey Collegiate Division",
    date: "Mar 2025",
    description:
      "Awarded 4th Place at the 2025 FBLA State Leadership Conference for a personal-branding speech, advancing to compete at the National Leadership Conference in Dallas, Texas.",
  },
];
const marquee = ["Information Technology", "★", "Infrastructure", "★", "Networks", "★", "Systems", "★", "Cloud", "★", "Security", "★"];

const Section = ({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="border-t border-ink/10 py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 flex items-baseline justify-between gap-6">
        <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-ink-soft">{label}</span>
        <span className="font-mono-tech text-xs text-ink-soft">/{id}</span>
      </div>
      <h2 className="font-display text-5xl font-600 leading-[0.95] tracking-tight md:text-7xl text-balance">{title}</h2>
      <div className="mt-12">{children}</div>
    </div>
  </section>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-800 tracking-tight">
            Gali<span className="text-accent">.</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {["About", "Education", "Experience", "Certifications", "Awards", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-mono-tech text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-ink">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="mailto:galidesir@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono-tech text-xs uppercase tracking-widest text-paper transition-transform hover:-translate-y-0.5"
          >
            Say hi <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-paper opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-24 md:pt-40">
          <h1 className="fade-up font-display text-[clamp(3.5rem,11vw,10rem)] font-800 leading-[0.85] tracking-tighter text-balance" style={{ animationDelay: "0.1s" }}>
            Gali Desir<span className="text-accent">.</span>
          </h1>

          <div className="fade-up mt-10 grid gap-8 md:grid-cols-12" style={{ animationDelay: "0.25s" }}>
            <div className="md:col-span-2 md:pt-2">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-ink-soft">01 — Intro</div>
            </div>
            <p className="md:col-span-7 font-display text-2xl leading-snug text-balance md:text-3xl">
              Hi! I'm an <span className="bg-accent px-1.5">Information Technology</span> student at St. John's University and an aspiring{" "}
              <span className="italic">IT Infrastructure Engineer.</span>
            </p>
            <div className="md:col-span-3 md:pt-2">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-ink-soft">Currently</div>
              <div className="mt-2 font-mono-tech text-sm">
                NYC · est. 2027<br />
                B.S. in IT
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-ink/10 bg-ink py-5 text-paper">
          <div className="flex overflow-hidden">
            <div className="marquee-track flex shrink-0 gap-10 whitespace-nowrap pr-10">
              {[...marquee, ...marquee].map((w, i) => (
                <span key={i} className={`font-display text-3xl ${w === "★" ? "text-accent" : "italic"}`}>
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" label="02 — About" title="A student focused on technology and personal growth.">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 bg-accent -rotate-2" aria-hidden />
              <img
                src={portrait}
                alt="Portrait of Gali Desir"
                loading="lazy"
                className="relative w-full aspect-[4/5] object-cover rounded-sm grayscale contrast-[1.05] transition-all duration-500 hover:grayscale-0"
              />
              <div className="mt-3 flex items-center justify-between font-mono-tech text-xs uppercase tracking-widest text-ink-soft">
                <span>Gali Desir</span>
                <span>NYC · 2026</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <p className="text-lg leading-relaxed text-ink-soft">
              I'm building the foundation for a career in IT infrastructure — the systems, networks, and architecture that quietly keep the
              modern world running. I care about doing good work, learning constantly, and growing into the kind of engineer teams trust with the hard problems.
            </p>
            <div className="mt-8 rounded-md border border-ink/15 bg-paper/60 p-6 backdrop-blur">
              <Sparkles className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-2xl">What drives me</h3>
              <ul className="mt-4 space-y-2 font-mono-tech text-sm text-ink-soft">
                <li>→ Curiosity for how systems connect</li>
                <li>→ Discipline through daily growth</li>
                <li>→ Building reliable foundations</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" label="03 — Education" title="St. John's University.">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="group relative overflow-hidden rounded-md border border-ink/15 bg-ink p-10 text-paper">
              <div className="absolute right-6 top-6 font-mono-tech text-xs uppercase tracking-widest text-paper/60">2023 — 2027</div>
              <GraduationCap className="h-8 w-8 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-4xl md:text-5xl">Bachelor of Science</h3>
              <p className="mt-2 font-display text-2xl italic text-paper/80">Information Technology</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-paper/15 pt-6 font-mono-tech text-sm">
                <span className="text-paper/60">Expected Graduation</span>
                <span>May 2027</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col justify-between gap-4">
            <div className="rounded-md border border-ink/15 p-6">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-ink-soft">Focus</div>
              <p className="mt-2 font-display text-xl">IT Infrastructure & Systems</p>
            </div>
            <div className="rounded-md bg-accent p-6">
              <div className="font-mono-tech text-xs uppercase tracking-widest">Location</div>
              <p className="mt-2 font-display text-xl">Baldwin, New York</p>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" label="04 — Experience" title="Where I've been working.">
        <ol className="relative space-y-6 border-l border-ink/15 pl-6 md:pl-10">
          {experience.map((job, i) => (
            <li key={job.org + job.role} className="group relative">
              <span className="absolute -left-[31px] md:-left-[45px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-paper" aria-hidden />
              <div className="rounded-md border border-ink/15 bg-paper p-6 md:p-8 transition-colors hover:border-ink/40">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <div className="font-mono-tech text-xs uppercase tracking-widest text-ink-soft">0{i + 1} · {job.org}</div>
                  <div className="font-mono-tech text-xs uppercase tracking-widest text-ink-soft">{job.period}</div>
                </div>
                <h3 className="mt-3 flex items-center gap-3 font-display text-2xl md:text-3xl">
                  <Briefcase className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  {job.role}
                </h3>
                <ul className="mt-4 space-y-2 text-ink-soft">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed">
                      <span className="font-mono-tech text-accent">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications" label="05 — Certifications" title="Credentials I've earned.">
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert.name} className="group flex flex-col rounded-md border border-ink/15 bg-paper p-6 transition-colors hover:border-ink/40">
              <div className="flex items-start justify-between gap-4">
                <BadgeCheck className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <span className="font-mono-tech text-xs uppercase tracking-widest text-ink-soft">{cert.issued}</span>
              </div>
              <h3 className="mt-4 font-display text-xl leading-snug">{cert.name}</h3>
              <p className="mt-1 font-mono-tech text-xs uppercase tracking-widest text-ink-soft">{cert.issuer}</p>
              {cert.credentialId && (
                <p className="mt-1 font-mono-tech text-xs text-ink-soft">ID · {cert.credentialId}</p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((s) => (
                  <span key={s} className="rounded-full border border-ink/15 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-widest text-ink-soft">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* AWARDS */}
      <Section id="awards" label="06 — Awards" title="Honors and recognition.">
        <div className="grid gap-6 md:grid-cols-3">
          {awards.map((a) => (
            <article key={a.title} className="group flex flex-col rounded-md border border-ink/15 bg-paper p-6 md:p-8 transition-colors hover:border-ink/40">
              <Award className="h-7 w-7 text-accent" strokeWidth={1.5} />
              <div className="mt-4 font-mono-tech text-xs uppercase tracking-widest text-ink-soft">{a.date}</div>
              <h3 className="mt-2 font-display text-2xl leading-snug">{a.title}</h3>
              <p className="mt-2 font-mono-tech text-xs uppercase tracking-widest text-ink-soft">{a.issuer}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{a.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 flex items-baseline justify-between gap-6">
            <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-paper/60">07 — Contact</span>
            <span className="font-mono-tech text-xs text-paper/60">/contact</span>
          </div>
          <h2 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl text-balance">
            Let's <em className="italic text-accent">connect.</em>
          </h2>

          <div className="mt-16 grid gap-px bg-paper/10 md:grid-cols-3 overflow-hidden rounded-md">
            <a
              href="mailto:galidesir@gmail.com"
              className="group flex flex-col gap-6 bg-ink p-8 transition-colors hover:bg-accent hover:text-ink"
            >
              <Mail className="h-6 w-6" strokeWidth={1.5} />
              <div>
                <div className="font-mono-tech text-xs uppercase tracking-widest opacity-60">Email</div>
                <div className="mt-2 font-display text-xl">galidesir@gmail.com</div>
              </div>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="tel:+15164257192"
              className="group flex flex-col gap-6 bg-ink p-8 transition-colors hover:bg-accent hover:text-ink"
            >
              <Phone className="h-6 w-6" strokeWidth={1.5} />
              <div>
                <div className="font-mono-tech text-xs uppercase tracking-widest opacity-60">Phone</div>
                <div className="mt-2 font-display text-xl">(516) 425-7192</div>
              </div>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-6 bg-ink p-8 transition-colors hover:bg-accent hover:text-ink"
            >
              <Linkedin className="h-6 w-6" strokeWidth={1.5} />
              <div>
                <div className="font-mono-tech text-xs uppercase tracking-widest opacity-60">Social</div>
                <div className="mt-2 font-display text-xl">LinkedIn</div>
              </div>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
            >
              <FileDown className="h-4 w-4" /> Download Resume
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
            </a>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-paper/50">PDF · Updated 2026</span>
          </div>

          <footer className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-8 font-mono-tech text-xs uppercase tracking-widest text-paper/50 md:flex-row md:items-center">
            <span>© 2026 Gali Desir</span>
            <span>Built with intention.</span>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default Index;
