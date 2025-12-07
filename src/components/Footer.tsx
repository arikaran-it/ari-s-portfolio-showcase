import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="code-font text-sm text-muted-foreground">
            Designed & Built by{" "}
            <span className="text-primary">Ari Karan</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
