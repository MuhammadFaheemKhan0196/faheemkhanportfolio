import { motion } from 'framer-motion';
import { Code2, Zap, Target } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: Code2,
      title: 'Modern Development',
      description: 'Building responsive, performant web applications with React, Tailwind CSS, and modern JavaScript.',
    },
    {
      icon: Zap,
      title: 'Smooth Animations',
      description: 'Creating delightful user experiences with Framer Motion and Three.js for interactive 3D elements.',
    },
    {
      icon: Target,
      title: 'Pixel Perfect Design',
      description: 'Focusing on clean code, accessibility, and beautiful UI that works seamlessly across all devices.',
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="glow-text">Me</span>
          </h2>
          <div className="gradient-line mx-auto w-24 mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate web developer from Kohat, Pakistan, dedicated to creating modern, animated, and user-friendly web experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm a creative web developer with a passion for building modern, interactive web experiences. With expertise in React, Tailwind CSS, and Three.js, I transform ideas into beautiful, animated digital products.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My journey in web development started with a curiosity about how websites work, and it has evolved into a deep passion for creating seamless user experiences. I believe that great web design combines aesthetics with functionality.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, experimenting with animations, or contributing to open-source projects. I'm always eager to learn and grow in this ever-evolving field.
            </p>
            <div className="pt-4">
              <a
                href="https://github.com/MuhammadFaheemKhan0196"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button inline-block"
              >
                View My GitHub
              </a>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card-hover p-6 group"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Projects Completed', value: '15+' },
            { label: 'Happy Clients', value: '10+' },
            { label: 'Years Experience', value: '2+' },
            { label: 'Technologies', value: '20+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold glow-text mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default About;
