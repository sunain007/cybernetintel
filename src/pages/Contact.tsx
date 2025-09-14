import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    const result = await emailjs.send(
      "service_ymvtqcj",       // from EmailJS dashboard
      "template_2wh67n8",      // from EmailJS template
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      },
      "jWt8HVK5CqVmfWb0x"        // from EmailJS dashboard
    );

    console.log(result.text);
    setIsSubmitted(true);
  } catch (error) {
    console.error(error);
    alert("Something went wrong, please try again!");
  }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Web Development',
    'AI & Machine Learning',
    'Cybersecurity Services',
    'System & Application Support',
    'Graphic Design & Branding',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contactus@cybernetintel.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Visit Us at',
      details: 'cybernetintel.com',
      description: 'Visit our website to see our services.'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Free consultation to discuss your project needs'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Process',
      description: 'Clear communication throughout the project'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Get In <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to transform your business with cutting-edge technology? Let's discuss your project 
            and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`p-8 rounded-2xl transition-colors duration-300 ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-white border border-gray-200'
            }`}>
              <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Start Your Project
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-500">
                    <CheckCircle size={20} />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-sm mt-1 text-green-600/80">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-slate-700 border-slate-600 text-white'
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none ${
                      theme === 'dark'
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell us about your project, requirements, timeline, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className={`p-6 rounded-xl transition-all duration-300 ${
                      theme === 'dark' ? 'bg-slate-800' : 'bg-white border border-gray-200'
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                        }`}>
                          <info.icon size={24} />
                        </div>
                        <div>
                          <h3 className={`font-semibold mb-1 transition-colors duration-300 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {info.title}
                          </h3>
                          <p className="text-cyan-500 font-medium mb-1">{info.details}</p>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Why Work With Us?
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${
                        theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                      }`}>
                        <feature.icon size={16} />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 transition-colors duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h4>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Common questions about our services and process
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 8-16 weeks. We provide detailed timelines during our initial consultation.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes! We offer comprehensive support packages including maintenance, updates, monitoring, and technical support. Our team is available 24/7 to ensure your systems run smoothly.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'We specialize in modern web technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure), AI/ML frameworks, and cybersecurity tools. We stay current with the latest technologies.'
              },
              {
                question: 'How do you handle project communication?',
                answer: 'We believe in transparent communication. You\'ll have direct access to your project team, regular progress updates, and scheduled check-ins. We use project management tools to keep everyone aligned.'
              },
              {
                question: 'What information do you need to start a project?',
                answer: 'We need to understand your business goals, target audience, functional requirements, design preferences, timeline, and budget. Our discovery process helps us gather all necessary information.'
              }
            ].map((faq, index) => (
              <div key={index} className={`p-6 rounded-xl transition-colors duration-300 ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-white'
              }`}>
                <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {faq.question}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;