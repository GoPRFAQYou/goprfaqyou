'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function MethodPage() {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSignUpClick={() => setShowModal(true)} onLoginClick={() => setShowLogin(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900"
          >
            The PRFAQ Method
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
          >
            Work backwards from your vision. The proven methodology that transforms ideas into actionable plans.
          </motion.p>
        </div>
      </section>

      {/* What is PRFAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#F27700]">What is PRFAQ?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                PRFAQ stands for <strong>Press Release - Frequently Asked Questions</strong>. It's a strategic planning methodology 
                popularized by Amazon that helps you work backwards from your desired outcome.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Instead of starting with what you have, you begin by writing the press release you'd want to see when your idea 
                succeeds. Then you work backwards to figure out what needs to be true to make that press release a reality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This method forces you to think big, clarify your vision, and identify the key questions and challenges upfront.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                src="/images/womanpier.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">The PRFAQ Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Write the Press Release',
                description: 'Start with the end in mind. Write the press release announcing your successful idea. Be specific about what you\'re launching and why it matters.',
                icon: '📰'
              },
              {
                step: '02',
                title: 'Answer the FAQs',
                description: 'Think through all the questions stakeholders will have. What are the risks? What are the benefits? What makes this different?',
                icon: '❓'
              },
              {
                step: '03',
                title: 'Work Backwards',
                description: 'Identify what needs to be true for your press release to become reality. Break down the requirements, dependencies, and milestones.',
                icon: '🔄'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-sm font-bold text-[#F27700] mb-2">STEP {item.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Why Use PRFAQ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Clarity of Vision',
                description: 'Forces you to articulate exactly what success looks like and why it matters.',
                icon: '🎯'
              },
              {
                title: 'Early Problem Identification',
                description: 'Helps you spot potential issues and objections before you invest significant resources.',
                icon: '🔍'
              },
              {
                title: 'Stakeholder Alignment',
                description: 'Creates a shared understanding of goals and expectations across your team.',
                icon: '🤝'
              },
              {
                title: 'Risk Mitigation',
                description: 'Encourages thinking through challenges and dependencies upfront.',
                icon: '🛡️'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
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
            Ready to Start Your PRFAQ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Master the PRFAQ method with our comprehensive guide. Get your copy of The PRFAQ Book and transform your ideas into actionable plans today.
          </motion.p>
          <motion.a
            href="/book"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[#F27700] px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            Get Started
          </motion.a>
        </div>
      </section>

      {/* Modals - Reuse from main page if needed */}
    </div>
  );
}

