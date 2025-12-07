import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, GitBranch, Globe, Users, Brain, Zap, MessageCircle } from "lucide-react";

const technicalSkills = [
  { name: "Java", icon: Code2, level: 90 },
  { name: "Spring Boot", icon: Server, level: 85 },
  { name: "REST APIs", icon: Globe, level: 85 },
  { name: "React JS", icon: Code2, level: 80 },
  { name: "JavaScript", icon: Code2, level: 80 },
  { name: "MySQL", icon: Database, level: 85 },
  { name: "JDBC", icon: Database, level: 80 },
  { name: "Git & GitHub", icon: GitBranch, level: 85 },
  { name: "HTML/CSS", icon: Globe, level: 90 },
];

const softSkills = [
  { name: "Adaptiveness", icon: Zap },
  { name: "Logical Thinking", icon: Brain },
  { name: "Quick Learner", icon: Zap },
  { name: "Team Collaboration", icon: Users },
];

const languages = [
  { name: "Tamil", level: "Fluent" },
  { name: "English", level: "Basic" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="code-font text-primary">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Code2 className="text-primary" size={22} />
                Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="glass-card rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={16} className="text-primary" />
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground code-font">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.05 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div className="space-y-8">
              {/* Soft Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Brain className="text-primary" size={22} />
                  Soft Skills
                </h3>
                <div className="space-y-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3 glass-card rounded-lg px-4 py-3"
                    >
                      <skill.icon size={16} className="text-primary" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <MessageCircle className="text-primary" size={22} />
                  Languages
                </h3>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center justify-between glass-card rounded-lg px-4 py-3"
                    >
                      <span className="text-sm font-medium">{lang.name}</span>
                      <span className="text-xs text-primary code-font">{lang.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
