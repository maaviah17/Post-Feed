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
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
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
        <h1 className="text-2xl font-bold tracking-wider group cursor-pointer">
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

      {/* Hero Section */}
      <section 
        className="relative z-10 flex flex-1 flex-col justify-center items-center text-center px-6"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur-2xl opacity-25 animate-pulse" />
          <h2 className="relative text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white animate-gradient-x">
            Share Your World.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient-x">
              One Post at a Time.
            </span>
          </h2>
        </div>
        
        <p className="mt-6 text-gray-400 max-w-xl text-lg animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          ummMMK is your space to drop moments, thoughts, and creativity.
          <br />
          <span className="text-pink-400 font-medium">No noise. Just vibes.</span>
        </p>

        <div className="mt-10 flex gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <button
            onClick={() => navigate("/create-post")}
            className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold overflow-hidden group"
          >
            <span className="relative z-10 text-white">Create Post</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button
            onClick={() => navigate("/feed")}
            className="relative px-8 py-4 border-2 border-pink-500 rounded-lg font-semibold overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-black transition-colors">Explore Feed</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
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

      {/* Features Section */}
      <section className="relative z-10 grid md:grid-cols-3 gap-8 px-8 py-16 bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-800">
        {[
          {
            icon: "🔐",
            title: "Secure Authentication",
            desc: "JWT-based login system with protected routes and secure access control.",
            gradient: "from-pink-500 to-rose-500"
          },
          {
            icon: "🚀",
            title: "Optimized Feed",
            desc: "Paginated API responses for smooth scrolling and scalable performance.",
            gradient: "from-purple-500 to-pink-500"
          },
          {
            icon: "💬",
            title: "Interactive System",
            desc: "Like and comment features designed with real-world backend architecture.",
            gradient: "from-blue-500 to-purple-500"
          }
        ].map((feature, idx) => (
          <div
            key={idx}
            className="group relative p-6 bg-zinc-900 rounded-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden"
            style={{
              animationDelay: `${idx * 0.1}s`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${feature.gradient}`}>
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-500 text-sm py-6 border-t border-zinc-800 backdrop-blur-sm">
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