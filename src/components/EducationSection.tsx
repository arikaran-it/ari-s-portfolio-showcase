import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BE - Computer Science & Engineering",
    institution: "VV College of Engineering",
    year: "Sept 2027",
    score: "80%",
    status: "Expected",
  },
  {
    degree: "Diploma - Computer Science & Engineering",
    institution: "RECT Polytechnic College",
    year: "May 2021",
    score: "94%",
    status: "Completed",
  },
  {
    degree: "HSC",
    institution: "AVJ Govt Higher Sec School",
    year: "Apr 2019",
    score: "62%",
    status: "Completed",
  },
  {
    degree: "SSLC",
    institution: "Senthilandavan High School",
    year: "Mar 2021",
    score: "92%",
    status: "Completed",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-secondary/20">
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
            <span className="code-font text-primary">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Education Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {edu.score}
                      </span>
                      <span className="text-xs text-muted-foreground code-font">{edu.year}</span>
                      {edu.status === "Expected" && (
                        <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
