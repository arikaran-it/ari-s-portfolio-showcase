import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Trophy, ExternalLink } from "lucide-react";

const experiences = [
  {
    type: "internship",
    title: "Java Full-Stack Development Intern",
    date: "Dec 2025",
    icon: Briefcase,
    description: [
      "Worked on developing responsive web applications using Java and React",
      "Implemented RESTful APIs and connected them with the frontend",
      "Learned version control (Git) and team collaboration in a professional environment",
      "Collaborated with team members to enhance application functionality and debug code",
    ],
  },
  {
    type: "certification",
    title: "NPTEL – Programming in Java",
    date: "Nov 2024",
    icon: Award,
    description: [
      "Completed a comprehensive course on Java programming and object-oriented concepts",
      "Learned to write, compile, and debug Java applications effectively",
      "Gained hands-on experience with core Java libraries and basic data structures",
      "Developed a strong foundation for building scalable and efficient Java-based applications",
    ],
  },
  {
    type: "achievement",
    title: "Problem Solving in Java",
    date: "July 2025",
    icon: Trophy,
    description: [
      "Participated in college-level Java problem-solving challenges, strengthening algorithmic and programming skills",
      "Took part in college-level DSA and Java coding contests, improving logical thinking and speed in problem-solving",
    ],
  },
];

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/arikaran_it" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/arikaran_it" },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="code-font text-primary">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            {/* Experience Items */}
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-3 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Content */}
                  <div className="glass-card rounded-xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <exp.icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground code-font">{exp.date}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === "internship" 
                          ? "bg-primary/10 text-primary"
                          : exp.type === "certification"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}>
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coding Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <span className="text-muted-foreground text-sm">Coding Profiles:</span>
            {codingProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors text-sm font-medium"
              >
                {profile.name}
                <ExternalLink size={14} className="text-primary" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
