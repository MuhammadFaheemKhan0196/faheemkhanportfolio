import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Mail, MessageCircle } from 'lucide-react';
import HeroBackground from './HeroBackground';

const Hero = () => {
  const profileImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663301152651/aUTXrzghV7khJBMVY28sb4/profile_45df3bc6.jpeg';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Three.js Background */}
      <HeroBackground />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <p className="text-primary text-lg md:text-xl font-medium">Welcome to my portfolio</p>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-2 leading-tight">
                  Hi, I'm{' '}
                  <span className="glow-text">Muhammad Faheem Khan</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground h-16"
              >
                <TypeAnimation
                  sequence={[
                    'Creative Web Developer',
                    2000,
                    'React Specialist',
                    2000,
                    'UI/UX Enthusiast',
                    2000,
                    'Animation Expert',
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="glow-text-secondary"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                From Kohat, Pakistan. Passionate about building modern, animated web experiences with cutting-edge technologies. Specializing in React, Tailwind CSS, and immersive 3D interactions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <button
                  onClick={() => scrollToSection('projects')}
                  className="neon-button group"
                >
                  View Projects
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="neon-button-secondary group"
                >
                  Contact Me
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex gap-4 pt-4"
              >
                <a
                  href="https://github.com/MuhammadFaheemKhan0196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:faheemkhanwazir1122@gmail.com"
                  className="p-3 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://wa.me/923361002095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Animated Border */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(0, 217, 255, 0.3)',
                      '0 0 40px rgba(168, 85, 247, 0.3)',
                      '0 0 20px rgba(0, 217, 255, 0.3)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="rounded-2xl overflow-hidden border border-primary/50"
                >
                  <img
                    src={profileImage}
                    alt="Muhammad Faheem Khan"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-primary hover:text-secondary transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={20} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
