import React from 'react';
import { Users, Award, Lightbulb, Target, CheckCircle, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring every solution perfectly aligns with your business goals.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every project is measured by its impact on your business success, not just technical completion.'
    }
  ];

  const stats = [
    { number: '< 24 hrs', label: 'Response Time' },
    { number: '98%', label: 'Project Success Rate' },
    { number: '95%', label: 'Client Retention' },
    { number: '24/7', label: 'Support Available' }
  ];

  const achievements = [
    'Successfully launched 150+ projects across various industries',
    'Maintained 98% client satisfaction rate over 5 years',
    'Reduced client operational costs by an average of 30%',
    'Implemented security solutions with zero breaches',
    'Delivered 95% of projects on time and within budget',
    'Built long-term partnerships with Fortune 500 companies'
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">CyberNetIntel</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We're a passionate team of technology professionals dedicated to transforming 
            businesses through innovative digital solutions and exceptional service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Our Story
              </h2>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Founded in 2025, TechSolutions emerged from a simple belief: every business deserves 
                access to world-class technology solutions, regardless of size or budget. What started 
                as a small team of passionate developers has grown into a comprehensive technology 
                partner serving clients across multiple industries.
              </p>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Today, we combine deep technical expertise with business acumen to deliver solutions 
                that don't just work—they drive real results. Our commitment to innovation, quality, 
                and client success has made us a trusted partner for startups and enterprises alike.
              </p>
            </div>
            
            <div className={`relative rounded-2xl p-8 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-slate-800 to-slate-900'
                : 'bg-gradient-to-br from-gray-50 to-white'
            }`}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-500 mb-2">{stat.number}</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our Values
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`text-center p-6 rounded-xl transition-all duration-300 ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-white'
              }`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                  theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                }`}>
                  <value.icon size={32} />
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {value.title}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Our Achievements */}
      
    </div>
  );
};

export default About;