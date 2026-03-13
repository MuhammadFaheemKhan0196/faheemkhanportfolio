import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 glass-card border-b backdrop-blur-md"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="glow-text">F</span>
          <span className="text-foreground">S</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:block neon-button text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg border border-border hover:bg-muted transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t border-border"
      >
        <div className="container max-w-6xl mx-auto px-4 md:px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block neon-button text-center text-sm mt-4"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
