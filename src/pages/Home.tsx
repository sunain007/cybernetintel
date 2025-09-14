import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Brain, Shield, Wrench, Palette, Building, Monitor, Cloud } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Home: React.FC = () => {
  const { theme } = useTheme();

  const services = [
    { icon: Code, title: 'Web Development' },
    { icon: Brain, title: 'AI Solutions' },
    { icon: Shield, title: 'Cybersecurity' },
    { icon: Wrench, title: 'System Support'},
    { icon: Palette, title: 'Design & Branding'}
  ];

  const benefits = [
    'Professional & Scalable Solutions',
    'Expert Team with Proven Track Record',
    '24/7 Support & Maintenance',
    'Competitive Pricing & Fast Delivery',
    'Custom Solutions for Every Business'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Empowering Your Business with
              <span className="block bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                Innovative Technology
              </span>
            </h1>
            
            <p className={`text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our team ensures strong digital protection, innovative designs, and seamless online store setups. Along with this, we offer reliable technical support to keep your business running smoothly and securely.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/services"
                className="group bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/contact"
                className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'border-slate-600 text-gray-300 hover:border-cyan-500 hover:text-white hover:bg-cyan-500/10'
                    : 'border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50'
                }`}
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className={`text-center p-4 rounded-lg transition-all duration-300 ${
                  theme === 'dark' ? 'bg-slate-800/50' : 'bg-white/50'
                }`}>
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                    theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                  }`}>
                    <service.icon size={24} />
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-5 ${
            theme === 'dark' ? 'bg-gradient-to-l from-cyan-500' : 'bg-gradient-to-l from-cyan-200'
          }`} />
          <div className={`absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full opacity-5 ${
            theme === 'dark' ? 'bg-gradient-to-r from-cyan-600' : 'bg-gradient-to-r from-cyan-300'
          }`} />
        </div>
      </section>

      {/* Services Overview */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Complete Technology Solutions
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We offer comprehensive services across all areas of modern technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Web Development',
                description: 'Custom web applications, e-commerce platforms, and portfolio sites built with modern technologies.',
                features: ['React/Next.js', 'Full-stack Development', "Responsive & Mobile-Friendly Design", "Custom Web Applications"]
              },
              {
                icon: Brain,
                title: 'AI & Automation',
                description: 'Intelligent solutions including AI agents, chatbots, and machine learning analytics.',
                features: ['AI Chatbots', 'Machine Learning', 'Process Automation', 'Data Analytics']
              },
              {
                icon: Shield,
                title: 'CyberSecurity',
                description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.',
                features: ['Penetration Testing', 'Vulnerability Assessment', 'Firewall Setup', 'Security Audits']
              },
              {
                icon: Wrench,
                title: 'IT Support',
                description: 'Reliable system and application support to keep your business running smoothly.',
                features: ['Bug Fixing', 'Troubleshooting', 'Performance Optimization', '24/7 Monitoring']
              },
              {
                icon: Palette,
                title: 'Graphic Designing',
                description: 'Creative design services including logos, UI/UX design, and complete branding solutions.',
                features: ['Logo Design', 'Brand Identity', 'Graphic Design']
              },
              {
                icon: Building,
                title: 'University Project Assistance',
                description: "Guidance and development support for computer science and cybersecurity academic projects.",
                features: ['Final Year Project Assistance', 'Research & Documentation', 'CyberSecurity tools & Simulations', 'Code Review & Debugging']
              },
              {
                icon: Monitor,
                title: 'Shopify Development',
                description: "Creating high-performing Shopify stores tailored to boost your online business.",
                features: ['Custom Store Design', 'Theme Devalopment & optimization', 'Speed & SEO Enhancements']
              },
              {
                icon: Cloud,
                title: 'Cloud Computing',
                description: "Basic cloud setup, management, and task automation to help businesses leverage cloud power efficiently.",
                features: ['Cloud Infrastructure Setup & Management', 'Automated Workflows & Task Scheduling', 'Security & Performance Optimization' ]
              }
            ].map((service, index) => (
              <div key={index} className={`group p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-slate-800 border border-slate-700 hover:border-cyan-500/50'
                  : 'bg-white border border-gray-200 hover:border-cyan-500/50'
              }`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20'
                    : 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100'
                }`}>
                  <service.icon size={24} />
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`mb-4 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                        theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500'
                      }`} />
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Why Choose CyberNetIntel?
              </h2>
              <p className={`text-lg mb-8 leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We combine technical expertise with business acumen to deliver solutions that not only work 
                perfectly but also drive real business value. Our team of experienced professionals is 
                dedicated to your success.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-cyan-500 flex-shrink-0" size={20} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

             
            </div>

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Transform Your Business?
          </h2>
          <p className={`text-xl mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss how we can help you achieve your technology goals
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
