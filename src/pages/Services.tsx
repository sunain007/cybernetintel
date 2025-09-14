import React from 'react';
import { Code, Brain, Shield, Wrench, Palette, CheckCircle, Monitor, Cloud, Building } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const { theme } = useTheme();

  const serviceCategories = [
    {
      category: 'Development',
      services: [
        {
          title: 'Web Development',
          description: 'Modern, responsive websites and web applications built with the latest technologies.',
          icon: Code,
          features: [
            'React/Next.js',
            'Full-stack Development',
            'Portfolio & Business Websites',
            'Responsive & Mobile-Friendly Design',
            'Custom Web Applications',
            'Performance Optimization'
          ]
        }
      ]
    },
    {
      category: 'AI & Automation',
      services: [
        {
          title: 'AI Solutions',
          description: 'Intelligent automation and machine learning solutions to streamline your business processes.',
          icon: Brain,
          features: [
            'AI Chatbots', 'Machine Learning', 'Process Automation', 'Data Analytics'
          ]
        }
      ]
    },
    {
      category: 'Security',
      services: [
        {
          title: 'Cybersecurity Services',
          description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
          icon: Shield,
          features: [
            'Penetration Testing', 'Vulnerability Assessment', 'Firewall Setup', 'Security Audits'
          ]
        }
      ]
    },
    {
      category: 'University Projects',
      services:[
        {icon: Building,
                title: 'University Project Assistance',
                description: "Guidance and development support for computer science and cybersecurity academic projects.",
                features: ['Final Year Project Assistance', 'Research & Documentation', 'CyberSecurity tools & Simulations', 'Code Review & Debugging']}
      ]
    },
    {
      category: 'Support',
      services: [
        {
          title: 'IT Support',
          description: 'Reliable technical support to keep your systems running smoothly and efficiently.',
          icon: Wrench,
          features: [
            'Bug Fixing', 'Troubleshooting', 'Performance Optimization', '24/7 Monitoring'
          ]
        }
      ]
    },
    {
      category: 'Design & Branding',
      services: [
        {
          title: 'Graphic Designing',
          description: 'Professional design services to establish and enhance your brand identity.',
          icon: Palette,
          features: [
           'Logo Design', 'Brand Identity', 'Graphic Design'
          ]
        }
      ]
    },
    {
      category: 'E-Commerce',
      services: [
        {
          icon: Monitor,
          title: 'Shopify Devalopment',
          description: "Creating high-performing Shopify stores tailored to boost your online business.",
          features: ['Custom Store Design', 'Theme Devalopment & optimization', 'Speed & SEO Enhancements']
        }
      ]
    },
    {
      category: 'Cloud Computing Solutions',
      services: [
        {
                icon: Cloud,
                title: 'Cloud Computing',
                description: "Basic cloud setup, management, and task automation to help businesses leverage cloud power efficiently.",
                features: ['Cloud Infrastructure Setup & Management', 'Automated Workflows & Task Scheduling', 'Security & Performance Optimization' ]
    }]
              
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs, goals, and technical requirements.'
    },
    {
      step: '02',
      title: 'Strategy & Design',
      description: 'Our team creates a comprehensive strategy and design that aligns with your objectives.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using best practices and rigorously test for quality assurance.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'After successful deployment, we provide ongoing support and maintenance.'
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
            Our <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            From concept to deployment, we provide comprehensive technology solutions 
            that help businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.category}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <ServiceCard
                    key={serviceIndex}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    features={service.features}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our Process
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className={`text-center p-6 rounded-lg transition-all duration-300 ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-white'
              }`}>
                <div className="text-4xl font-bold text-cyan-500 mb-4">{step.step}</div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Why Choose Our Services?
              </h2>
              <p className={`text-lg mb-8 leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We don't just build technology; we create solutions that drive real business value. 
                Our comprehensive approach ensures that every project meets your specific needs and exceeds expectations.
              </p>
              
              <div className="space-y-4">
                {[
                  'Cutting-edge technologies and best practices',
                  'Agile development methodology',
                  'Transparent communication throughout',
                  'Post-launch support and maintenance',
                  'Competitive pricing with flexible packages'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-cyan-500 flex-shrink-0" size={20} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative rounded-2xl p-8 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-slate-800 to-slate-900'
                : 'bg-gradient-to-br from-gray-50 to-white'
            }`}>
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Service Guarantees
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-500 mb-2">100%</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Quality Assurance
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-500 mb-2">24/7</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Support Available
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-500 mb-2">Fast</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Delivery Timeline
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;