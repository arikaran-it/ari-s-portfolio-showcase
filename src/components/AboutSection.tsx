import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: MapPin, text: "Tirunelveli – 627 652" },
    { icon: Phone, text: "9940444012" },
    { icon: Mail, text: "arikaran4044@gmail.com" },
    { icon: Calendar, text: "Expected Graduation: Sept 2027" },
  ];

  return (
    <section id="about" className="py-24 relative">
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
            <span className="code-font text-primary">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Text Content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a motivated <span className="text-primary font-medium">Java Full-Stack Developer</span> with 
                hands-on experience building web applications using modern technologies. My expertise spans 
                across the entire stack, from crafting responsive frontends with React to building robust 
                backends with Spring Boot.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Strong in problem-solving, backend development, and database management, I've honed my skills 
                through academic projects and internship experience. I'm passionate about writing clean, 
                efficient code and building applications that make a difference.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently pursuing my <span className="text-primary font-medium">BE in Computer Science</span> at 
                VV College of Engineering, I'm constantly learning and exploring new technologies to stay 
                at the forefront of web development.
              </p>
            </div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Info</h3>
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <item.icon size={18} />
                    </div>
                    <span className="text-muted-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
