import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Code2, Coffee, ArrowRight, PlayCircle, BookOpen, X } from 'lucide-react';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
            <Terminal className="w-6 h-6 text-emerald-400" />
            <span>SAHAL<span className="text-zinc-500">ACADEMY</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#courses" className="hover:text-zinc-50 transition-colors">Courses</a>
            <a href="#method" className="hover:text-zinc-50 transition-colors">The Method</a>
            <a href="#about" className="hover:text-zinc-50 transition-colors">Instructor</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Log in
            </button>
            <button 
              onClick={() => setIsSignUpOpen(true)}
              className="text-sm font-medium bg-emerald-500 text-zinc-950 px-5 py-2 rounded-full hover:bg-emerald-400 transition-colors"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" 
              alt="Coding Background" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1]">
                You Were Never <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Bad at Coding.
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
            >
              You were taught wrong. The dictionary method. Memorize everything. Build nothing. 
              100 tutorials and you still can't create a single page. <br className="hidden md:block" />
              <span className="text-zinc-200 font-medium">That wasn't you. That was the method. We fix that.</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 text-zinc-950 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-400 transition-colors">
                Start Building Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 text-zinc-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 transition-colors border border-zinc-800">
                View Courses
              </button>
            </motion.div>
          </div>
        </section>

        {/* Value Props */}
        <section id="method" className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-800/50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Code2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-display font-bold">ONE SITTING.</h3>
              <p className="text-zinc-400 leading-relaxed">
                No 40-hour lectures. Sit down. Build something real. Walk away as a developer.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Coffee className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-display font-bold">PRICE OF A COFFEE.</h3>
              <p className="text-zinc-400 leading-relaxed">
                Elite engineering mentorship for the price of your morning shaah. No excuses left.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <Terminal className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-display font-bold">SENIOR ENGINEER.</h3>
              <p className="text-zinc-400 leading-relaxed">
                I spent 8 years building software used by millions. Now I teach you how I actually think.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:flex items-end justify-between">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">The Courses.</h2>
                <p className="text-xl text-zinc-400">Every thing you need. Nothing you don't.</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Course Card */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden transition-all hover:border-emerald-500/50"
              >
                <div className="absolute top-0 right-0 p-6">
                  <div className="flex items-center gap-2 bg-zinc-950/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-zinc-800">
                    <span className="text-emerald-400 font-bold">$5.00</span>
                  </div>
                </div>
                
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm mb-6">
                    <Terminal className="w-4 h-4" />
                    <span>FOUNDATIONS</span>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold mb-4">The Client: HTML & CSS</h3>
                  
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    You've watched the tutorials. You've taken the notes. You open a blank editor and freeze. 
                    That's not you. That's the method. In 90 minutes, you'll build a complete website from scratch. 
                    No theory. No notes. Just code from minute one.
                  </p>

                  <div className="flex flex-wrap gap-6 mb-10">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <BookOpen className="w-5 h-5 text-zinc-500" />
                      <span>3 modules</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <PlayCircle className="w-5 h-5 text-zinc-500" />
                      <span>17 lessons</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsCheckoutOpen(true)}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-zinc-950 px-6 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-colors"
                  >
                    Enroll Now for $5
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-zinc-950 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span>SAHAL<span className="text-zinc-500">ACADEMY</span></span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
            <a href="https://wa.me/4796967293" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
              Contact Us
            </a>
          </div>
          
          <div className="text-sm text-zinc-600">
            © 2026 Sahal Academy. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 w-full max-w-md relative shadow-2xl"
          >
            <button 
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors p-2"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold mb-2">Complete Payment</h3>
              <p className="text-zinc-400">The Client: HTML & CSS</p>
            </div>
            
            <form 
              className="space-y-5" 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert('Payment successful! Welcome to Sahal Academy.'); 
                setIsCheckoutOpen(false); 
              }}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5">Email address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="you@example.com" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5">Card details</label>
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                      placeholder="Card number" 
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="text" 
                        required 
                        className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                        placeholder="MM / YY" 
                      />
                      <input 
                        type="text" 
                        required 
                        className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                        placeholder="CVC" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-zinc-400">Total due</span>
                  <span className="text-2xl font-bold text-emerald-400">$5.00</span>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-emerald-500 text-zinc-950 font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                >
                  Pay $5.00
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 w-full max-w-md relative shadow-2xl"
          >
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors p-2"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold mb-2">Welcome back</h3>
              <p className="text-zinc-400">Log in to your Sahal Academy account</p>
            </div>
            
            <form 
              className="space-y-5" 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert('Logged in successfully!'); 
                setIsLoginOpen(false); 
              }}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5">Email address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="you@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5">Password</label>
                  <input 
                    type="password" 
                    required 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="••••••••" 
                  />
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-emerald-500 text-zinc-950 font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                >
                  Log in
                </button>
              </div>
              <p className="text-center text-sm text-zinc-500 mt-4">
                Don't have an account? <button type="button" onClick={() => { setIsLoginOpen(false); setIsSignUpOpen(true); }} className="text-emerald-400 hover:underline font-medium">Sign up</button>
              </p>
            </form>
          </motion.div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 w-full max-w-md relative shadow-2xl"
          >
            <button 
              onClick={() => setIsSignUpOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors p-2"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold mb-2">Create an account</h3>
              <p className="text-zinc-400">Start your coding journey today</p>
            </div>
            
            <form 
              className="space-y-5" 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert('Account created successfully!'); 
                setIsSignUpOpen(false); 
              }}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5">Email address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="you@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5">Password</label>
                  <input 
                    type="password" 
                    required 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="••••••••" 
                  />
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-emerald-500 text-zinc-950 font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                >
                  Sign up
                </button>
              </div>
              <p className="text-center text-sm text-zinc-500 mt-4">
                Already have an account? <button type="button" onClick={() => { setIsSignUpOpen(false); setIsLoginOpen(true); }} className="text-emerald-400 hover:underline font-medium">Log in</button>
              </p>
            </form>
          </motion.div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/4796967293"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all z-50 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
