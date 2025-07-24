import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a mailto link that opens the user's email client
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\n` +
        `This message was sent from your portfolio contact form.`
      );

      const mailtoLink = `mailto:sanaarshad1209@gmail.com?subject=${subject}&body=${body}`;

      // Open the email client
      window.open(mailtoLink, '_blank');

      // Show success message
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'sanaarshad1209@gmail.com',
      link: 'mailto:sanaarshad1209@gmail.com',
      color: '#667eea'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '03204078238',
      link: 'tel:03204078238',
      color: '#4facfe'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/SanaArshad12',
      link: 'https://github.com/SanaArshad12',
      color: '#333'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-16 left-16 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight relative inline-block">
              Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
              <span className="block h-1 w-16 mx-auto mt-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-2">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-slate-700/60 glass-strong rounded-2xl p-6 border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a question, want to discuss a project, or just want to say hello, 
                  feel free to reach out!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-3 bg-slate-600/60 rounded-lg hover:bg-slate-600/80 transition-all duration-300 transform hover:-translate-y-1 shadow border border-purple-500/10"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow"
                        style={{ backgroundColor: `${info.color}22` }}
                      >
                        <info.icon style={{ color: info.color }} size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-semibold">{info.label}</div>
                        <div className="text-white font-bold group-hover:text-purple-400 transition-colors text-base">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-purple-500/20 rounded-lg border border-purple-500/30 shadow hover:shadow-purple-500/30 transition-shadow duration-300">
                    <div className="text-xl font-extrabold text-purple-400 animate-pulse">24h</div>
                    <div className="text-sm text-gray-300">Response Time</div>
                  </div>
                  <div className="text-center p-3 bg-green-500/20 rounded-lg border border-green-500/30 shadow hover:shadow-green-500/30 transition-shadow duration-300">
                    <div className="text-xl font-extrabold text-green-400 animate-pulse">100%</div>
                    <div className="text-sm text-gray-300">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-700/60 glass-strong rounded-2xl p-6 border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-600/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-base shadow"
                    />
                  </div>

                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-600/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-base shadow"
                    />
                  </div>

                  <div className="relative">
                    <FaComment className="absolute left-4 top-4 text-gray-400 text-base" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 bg-slate-600/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-base shadow resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-bold text-base transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow ${
                      submitStatus === 'success'
                        ? 'bg-green-500 text-white'
                        : submitStatus === 'error'
                        ? 'bg-red-500 text-white'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-purple-500/25'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        ✓ Message Sent!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        ✗ Failed to Send
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="animate-bounce" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center text-base shadow"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center text-base shadow"
                  >
                    Oops! Something went wrong. Please try again.
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
