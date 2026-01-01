'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function ToolsPage() {

  const tools = [
    {
      title: 'AI-Powered PRFAQ Builder',
      description: 'Harness the power of AI to create compelling PRFAQs effortlessly. Our intelligent builder guides you through each step.',
      icon: '🤖',
      features: ['AI-generated press releases', 'Smart FAQ suggestions', 'Template library', 'Real-time collaboration']
    },
    {
      title: 'PRFAQ Templates',
      description: 'Start with proven templates for various industries and use cases. Customize them to fit your unique vision.',
      icon: '📋',
      features: ['Industry-specific templates', 'Customizable sections', 'Best practice examples', 'Export options']
    },
    {
      title: 'Feedback & Collaboration',
      description: 'Share your PRFAQs with team members and get expert feedback. Build better together.',
      icon: '💬',
      features: ['Comment threads', 'Version control', 'Review workflows', 'Team collaboration']
    },
    {
      title: 'PRFAQ Upload & Review',
      description: 'Upload your existing PRFAQs and get personalized feedback from our community of experts.',
      icon: '📤',
      features: ['Easy file upload', 'Expert reviews', 'Improvement suggestions', 'Rating system']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSignUpClick={() => {}} onLoginClick={() => {}} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900"
          >
            PRFAQ Tools & Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
          >
            Everything you need to create, refine, and share compelling PRFAQs. Powered by AI and built for collaboration.
          </motion.p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <div className="text-6xl mb-4">{tool.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">{tool.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{tool.description}</p>
                <div className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-[#F27700]">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-6 w-full bg-[#F27700] text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Tool',
                description: 'Select from our AI Builder, Templates, or Upload option based on your needs.',
                icon: '🎯'
              },
              {
                step: '2',
                title: 'Create Your PRFAQ',
                description: 'Use our guided interface to craft your press release and FAQs, or upload an existing one.',
                icon: '✍️'
              },
              {
                step: '3',
                title: 'Get Feedback & Share',
                description: 'Share with your team or the community to get expert feedback and refine your PRFAQ.',
                icon: '🚀'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-[#F27700] mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-4 text-blue-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Why Choose Our Tools?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered',
                description: 'Leverage cutting-edge AI to accelerate your PRFAQ creation process.',
                icon: '⚡'
              },
              {
                title: 'User-Friendly',
                description: 'Intuitive interface designed for both beginners and experts.',
                icon: '✨'
              },
              {
                title: 'Collaborative',
                description: 'Built-in collaboration features to work with your team seamlessly.',
                icon: '🤝'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Build Your PRFAQ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Join thousands of creators using our tools to transform their ideas into compelling PRFAQs.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#F27700] px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            Start Creating
          </motion.button>
        </div>
      </section>
    </div>
  );
}



