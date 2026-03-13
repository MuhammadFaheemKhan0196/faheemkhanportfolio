import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Modern Portfolio Website',
      description: 'A sleek, animated portfolio showcasing web development skills with Three.js 3D background and smooth Framer Motion animations.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
      github: 'https://github.com/MuhammadFaheemKhan0196',
      live: '#',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663301152651/aUTXrzghV7khJBMVY28sb4/hero-bg-abstract-6LURHKDJBGjufm9UJMkAUq.webp',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce application with product listings, shopping cart, and checkout functionality built with React and modern styling.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
      github: 'https://github.com/MuhammadFaheemKhan0196',
      live: '#',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663301152651/aUTXrzghV7khJBMVY28sb4/tech-pattern-N2uKJqUAHppGWETT3uPwLo.webp',
    },
    {
      title: 'Interactive Dashboard',
      description: 'Data visualization dashboard with real-time updates, interactive charts, and responsive design for analytics and monitoring.',
      technologies: ['React', 'Recharts', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/MuhammadFaheemKhan0196',
      live: '#',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663301152651/aUTXrzghV7khJBMVY28sb4/gradient-accent-MnjLRafkXRKBjQUNnFhaZk.webp',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
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
            Featured <span className="glow-text">Projects</span>
          </h2>
          <div className="gradient-line mx-auto w-24 mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent projects showcasing modern web development techniques and creative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card-hover overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-secondary/50 text-secondary hover:bg-secondary/10 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/MuhammadFaheemKhan0196"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button inline-block"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Projects;
