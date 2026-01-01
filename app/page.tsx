'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Use hooks at top level - they'll work once component is mounted
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end end"] 
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Don't return null - instead render a static version for SSR
  // The component will hydrate properly on the client

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={containerRef} className="relative">
      <Navbar onSignUpClick={() => setShowModal(true)} onLoginClick={() => setShowLogin(true)} />
      {/* Hero Section with COVERKINDLE.jpg as visual anchor */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden bg-black pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/images/WorkingWomen%20-%20Made%20with%20Clipchamp.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.85)' }}
          />
        </div>
        {/* Wide, full-width frosted glass overlay, centered vertically */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 w-full"
          style={{
            height: '374px',
            background: 'rgba(255,255,255,0.18)',
            borderRadius: '0',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1.5px solid rgba(255,255,255,0.22)',
          }}
        />
        <motion.div 
          className="flex-1 flex flex-col items-center justify-center text-center text-blue-900 z-10 px-4 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold mb-8 drop-shadow-xl"
            style={{ color: '#F27700', opacity }}
          >
            Ready to Announce<br />The New You?
          </motion.h1>
          <motion.p 
            className="text-3xl md:text-4xl mb-10 text-white max-w-2xl mx-auto md:mx-0 drop-shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Let’s work backwards to get there!
          </motion.p>
          <motion.a
            href="/book"
            className="inline-block bg-[#F27700] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
        {/* Mouse Scroll Icon */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Empower Your Vision Section */}
      <section id="method" className="w-full flex flex-col md:flex-row items-center justify-center py-48 px-4 md:px-0 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'url(/images/PRFAQBackground.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto'
            }}
          />
        </div>
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center max-w-xl mx-auto md:mx-0 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F17600]">EMPOWER YOUR VISION</h2>
          <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">
            <span className="font-bold">GO PRFAQ YOURSELF</span> is your go-to site for creation and collaboration of the Press Release - Frequently Asked Questions process. Inspired by the innovative methodology popularized by Amazon, we empower individuals to turn their ideas into actionable plans. Sign Up to upload your pre-written <span className="text-[#F17600] font-bold">PRFAQ</span> or utilize our AI Prompts to create your own. Engage with a vibrant community by reading and providing feedback on other PFAQs. Together let&apos;s shape the future you want.
          </p>
          <a href="#" className="text-[#F17600] underline text-lg font-medium hover:text-orange-400 transition" onClick={e => { e.preventDefault(); setShowModal(true); }}>Sign Up</a>
        </div>
        {/* Right: Video */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 relative z-10">
          <div className="relative w-full h-full max-w-2xl aspect-[4/3] overflow-hidden shadow-2xl rounded-2xl">
            <video
              src="/images/cafecouple.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section with scroll1.png as illustration */}
      <section id="tools" className="py-20 bg-white relative overflow-hidden">
        <motion.div 
          className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Illustration: Book Picnic Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-200">
              <Image
                src="/images/BookPicnic.png"
                alt="Book Picnic Illustration"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className=""
                priority={false}
              />
            </div>
          </div>
          {/* Features */}
          <div className="flex-1 grid gap-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 drop-shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Reinvent Your Content, the PRFAQ Way
            </motion.h2>
            {[
              {
                title: "Announce the New You",
                description: "Use AI-powered tools to craft bold, transformative press releases and FAQs—just like announcing your future self.",
                icon: "✨"
              },
              {
                title: "Work Backwards with Smart Templates",
                description: "Start from your vision and use guided templates that help you reverse-engineer your messaging, just like a PRFAQ.",
                icon: "🧩"
              },
              {
                title: "Collaborate to Build Your Future",
                description: "Shape your team's next big idea in real time with seamless collaboration—because breakthroughs aren't built alone.",
                icon: "🤝"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="text-3xl md:text-4xl mt-1 text-orange-500">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-blue-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'url(/images/prfaqbackground.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto'
            }}
          />
        </div>
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white px-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🚀 Ready to Announce the New You?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join thousands who are using GoPRFAQYOU to declare bold visions and reverse-engineer their path to success.
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-orange-400 via-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-500 hover:to-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
          >
            Launch Yourself
          </motion.button>
        </motion.div>
      </section>

      {/* Modal Overlay */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-6 text-blue-900 drop-shadow-xl text-center">Get Started</h2>
            {!submitted ? (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label className="font-semibold text-blue-900">Name<span className="text-red-500">*</span>
                  <input type="text" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your name" />
                </label>
                <label className="font-semibold text-blue-900">Email<span className="text-red-500">*</span>
                  <input type="email" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@email.com" />
                </label>
                <label className="font-semibold text-blue-900">PRFAQ Link (optional)
                  <input type="url" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="https://your-link.com" />
                </label>
                <button type="submit" className="mt-4 bg-[#F27700] text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors drop-shadow-xl">Submit</button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="text-3xl mb-4 text-blue-900 drop-shadow-xl">Thank you for your submission!</div>
                <div className="text-lg text-gray-700 text-center">Our team will reach out to you with next steps.</div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
      {/* Login Modal Overlay */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setShowLogin(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-6 text-blue-900 drop-shadow-xl text-center">Log In</h2>
            <form className="flex flex-col gap-4">
              <label className="font-semibold text-blue-900">Email
                <input type="email" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@email.com" />
              </label>
              <label className="font-semibold text-blue-900">Password
                <input type="password" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Password" />
              </label>
              <button type="submit" className="mt-4 bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors drop-shadow-xl">Log In</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}