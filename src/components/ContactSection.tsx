import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    { icon: Phone, label: "Phone", value: "9940444012", href: "tel:9940444012" },
    { icon: Mail, label: "Email", value: "arikaran4044@gmail.com", href: "mailto:arikaran4044@gmail.com" },
    { icon: MapPin, label: "Location", value: "Tirunelveli – 627 652", href: null },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/arikaran-it" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/arikaran-it" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="code-font text-primary">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {contactLinks.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:border-primary/30 transition-all group block"
                  >
                    <div className="p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <span className="text-sm text-muted-foreground mb-1">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </a>
                ) : (
                  <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <span className="text-sm text-muted-foreground mb-1">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center"
          >
            <a
              href="mailto:arikaran4044@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-primary/25"
            >
              <Mail size={20} />
              Say Hello
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors text-sm font-medium"
              >
                <social.icon size={18} />
                {social.label}
                <ExternalLink size={14} className="text-primary" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
