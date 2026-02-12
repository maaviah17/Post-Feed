import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Section - Full Screen */}
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Animated Background Gradient Orbs */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.15), transparent 50%)`
          }}
        />
        <div className="absolute top-20 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Navbar */}
        <nav className="relative z-50 flex justify-between items-center px-8 py-6 border-b border-zinc-800 backdrop-blur-sm bg-black/50">
          <h1 className="text-3xl font-bold tracking-wider group cursor-pointer">
            umm<span className="text-pink-500 inline-block group-hover:scale-110 transition-transform duration-300">MMK</span>
          </h1>
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => navigate("/create-post")}
              className="relative px-4 py-2 overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Create</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button
              onClick={() => navigate("/feed")}
              className="relative px-4 py-2 overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Feed</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <section 
          className="relative z-10 flex flex-1 flex-col justify-center items-center text-center px-6 py-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur-2xl opacity-25 animate-pulse" />
            <h2 className="relative text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white animate-gradient-x">
              Share Your World.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient-x">
                One Post at a Time.
              </span>
            </h2>
          </div>
          
          <p className="mt-8 text-gray-400 max-w-2xl text-lg md:text-xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            ummMMK is your space to drop moments, thoughts, and creativity.
            <br />
            <span className="text-pink-400 font-medium">No noise. Just vibes.</span>
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <button
              onClick={() => navigate("/create-post")}
              className="relative px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold text-lg overflow-hidden group"
            >
              <span className="relative z-10 text-white">Create Post</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button
              onClick={() => navigate("/feed")}
              className="relative px-10 py-5 border-2 border-pink-500 rounded-lg font-semibold text-lg overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-black transition-colors">Explore Feed</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll to explore</span>
              <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-pink-500 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Features Section - Redesigned */}
      <section className="relative z-10 px-8 py-24 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-zinc-800 overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
            Why Choose ummMMK?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built with cutting-edge technology and designed for the modern creator
          </p>
        </div>

        {/* Main Feature - Large Card */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 md:p-12 overflow-hidden border border-zinc-800 hover:border-pink-500/50 transition-all duration-500">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
                animation: 'grid-move 20s linear infinite'
              }} />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block p-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-12 h-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Lightning Fast Performance</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Experience blazing-fast load times with optimized API calls, intelligent caching, and lazy loading. Your feed loads instantly, keeping you in the flow.
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-500">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-gray-500">&lt;100ms Response</span>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 md:h-80">
                {/* Mock performance dashboard */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700">
                  <div className="space-y-4">
                    {[
                      { label: 'API Response', value: 95, color: 'pink' },
                      { label: 'Load Time', value: 88, color: 'purple' },
                      { label: 'Optimization', value: 92, color: 'blue' }
                    ].map((stat, idx) => (
                      <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s`, animationFillMode: 'forwards', opacity: 0 }}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400 text-sm">{stat.label}</span>
                          <span className="text-white font-semibold">{stat.value}%</span>
                        </div>
                        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-full transition-all duration-1000`}
                            style={{ width: `${stat.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Features - Creative Layout */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 - Tall Card */}
          <div className="lg:col-span-2 lg:row-span-2 group relative bg-gradient-to-br from-pink-500/10 via-transparent to-transparent rounded-3xl p-8 overflow-hidden border border-pink-500/20 hover:border-pink-500/50 transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Fort Knox Security</h3>
                <p className="text-gray-400 leading-relaxed">
                  Military-grade JWT authentication with encrypted sessions, role-based access control, and automatic token refresh. Your data stays yours.
                </p>
              </div>
              
              <div className="mt-auto space-y-3">
                {['End-to-End Encryption', 'CSRF Protection', 'Secure Headers'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2 - Square Card */}
          <div className="group relative bg-zinc-900 rounded-3xl p-6 overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Real-time Interactions</h3>
              <p className="text-gray-400 text-sm">
                Instant likes, comments, and notifications. Feel the community pulse.
              </p>
            </div>
          </div>

          {/* Feature 3 - Square Card */}
          <div className="group relative bg-zinc-900 rounded-3xl p-6 overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Rich Media Support</h3>
              <p className="text-gray-400 text-sm">
                Images, videos, and more. Share your story your way.
              </p>
            </div>
          </div>

          {/* Feature 4 - Wide Card */}
          <div className="lg:col-span-2 group relative bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-6 overflow-hidden border border-zinc-800 hover:border-pink-500/50 transition-all duration-500">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-gradient-x" style={{ backgroundSize: '200% 200%' }} />
            </div>
            
            <div className="relative z-10 flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-white">Smart Analytics</h3>
                <p className="text-gray-400 text-sm">
                  Track engagement, understand your audience, and grow your presence with built-in analytics dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="relative bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-8 md:p-12 overflow-hidden border border-zinc-800">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyMzYsIDcyLCAxNTMsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Ready to share your story?
              </h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Join thousands of creators already using ummMMK to connect, create, and inspire.
              </p>
              <button
                onClick={() => navigate("/create-post")}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl font-semibold text-white overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Get Started Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-500 text-sm py-6 border-t border-zinc-800 backdrop-blur-sm bg-black">
        <p className="flex items-center justify-center gap-2">
          © {new Date().getFullYear()} 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 font-semibold">
            ummMMK
          </span>
          . Built with 
          <span className="text-pink-500 animate-pulse">♥</span>
        </p>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;