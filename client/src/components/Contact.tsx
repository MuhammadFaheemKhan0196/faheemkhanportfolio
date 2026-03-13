import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Github } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'faheemkhanwazir1122@gmail.com',
      href: 'mailto:faheemkhanwazir1122@gmail.com',
      color: 'from-primary to-cyan-400',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+92 336 1002095',
      href: 'https://wa.me/923361002095',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kohat, Khyber Pakhtunkhwa, Pakistan',
      href: '#',
      color: 'from-secondary to-purple-400',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'MuhammadFaheemKhan0196',
      href: 'https://github.com/MuhammadFaheemKhan0196',
      color: 'from-slate-400 to-slate-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
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
            Get In <span className="glow-text">Touch</span>
          </h2>
          <div className="gradient-line mx-auto w-24 mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card-hover p-8 group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${method.color} p-1 group-hover:shadow-lg transition-all`}>
                    <div className="w-full h-full rounded-md bg-card flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm break-all">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-8">
            Let's work together to bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:faheemkhanwazir1122@gmail.com"
              className="neon-button"
            >
              Send Email
            </a>
            <a
              href="https://wa.me/923361002095"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button-secondary"
            >
              Message on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;
