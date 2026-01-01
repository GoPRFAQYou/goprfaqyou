'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function BookPage() {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSignUpClick={() => setShowModal(true)} onLoginClick={() => setShowLogin(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900"
          >
            The PRFAQ Book
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
          >
            Deep dive into the methodology that's transforming how teams plan and execute their boldest ideas.
          </motion.p>
        </div>
      </section>

      {/* Book Cover Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/BookPicnic.png"
                alt="The PRFAQ Book"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-2xl"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#F27700]">Master the Art of Working Backwards</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our comprehensive guide takes you through every aspect of the PRFAQ methodology. Learn from real-world 
                examples, detailed templates, and expert insights.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Whether you're launching a startup, planning a product, or transforming your organization, this book 
                will show you how to think bigger and work backwards from your vision.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-blue-900">Step-by-Step Guides</h3>
                    <p className="text-gray-700">Detailed instructions for creating your own PRFAQs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-blue-900">Real-World Examples</h3>
                    <p className="text-gray-700">Learn from successful PRFAQs across industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-blue-900">Expert Tips & Tricks</h3>
                    <p className="text-gray-700">Insights from practitioners who've mastered the method</p>
                  </div>
                </div>
              </div>
              <motion.a
                href="https://www.amazon.com/dp/B0GDF12DRT"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-8 bg-[#F27700] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Get it Today
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Table of Contents Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">What's Inside</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { chapter: 'Section 1', title: 'What is a PRFAQ', description: 'Understanding the methodology and its origins' },
              { chapter: 'Section 2', title: 'Clarity Over Hustle', description: 'Crafting compelling announcements that capture your vision' },
              { chapter: 'Section 3', title: 'Framing Your Idea', description: 'How to frame your idea in a way that is compelling and easy to understand' },
              { chapter: 'Section 4', title: 'Working Backwards', description: 'Breaking down your vision into actionable steps' },
              { chapter: 'Section 5', title: 'Socializing your PRFAQ', description: 'Sharing and getting feedback on your PRFAQ' },
              { chapter: 'Section 6', title: 'Real-World Case Studies', description: 'Learning from successful PRFAQs across industries' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-sm font-bold text-[#F27700] mb-2">{item.chapter}</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
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
            Start Your PRFAQ Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            While you wait for the book, join our community and start creating PRFAQs now.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#F27700] px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            onClick={() => setShowComingSoon(true)}
          >
            Join the Community
          </motion.button>
        </div>
      </section>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowComingSoon(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => {
                setShowComingSoon(false);
                setEmailSubmitted(false);
              }}
              aria-label="Close"
            >
              ×
            </button>
            {!emailSubmitted ? (
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h2 className="text-3xl font-bold mb-4 text-blue-900">Coming Soon</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our community platform is launching soon! Be the first to know when it's ready.
                </p>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEmailSubmitted(true);
                  }}
                >
                  <label className="font-semibold text-blue-900 text-left">
                    Email<span className="text-red-500">*</span>
                    <input
                      type="email"
                      required
                      className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="you@email.com"
                    />
                  </label>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#F27700] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg w-full"
                  >
                    Be Notified
                  </motion.button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="text-5xl mb-4">✓</div>
                <div className="text-2xl font-bold mb-4 text-blue-900">Thank you!</div>
                <div className="text-lg text-gray-700 text-center">
                  We'll notify you as soon as our community platform is ready.
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

