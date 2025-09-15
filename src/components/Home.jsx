export default function Home({ setActiveFile }) {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <style>{`
        @keyframes floatUpDown1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes floatUpDown2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(30px); }
        }
        @keyframes lineHover {
          0%, 95% { opacity: 0; }
          5%, 90% { opacity: 1; }
        }
        @keyframes lineMove {
          0% { top: 24px; }
          100% { top: 444px; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          25% { transform: scale(1.1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
          75% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 10px rgba(247, 187, 77, 0.6), 0 0 20px rgba(247, 187, 77, 0.4); }
          50% { text-shadow: 0 0 20px rgba(247, 187, 77, 1), 0 0 40px rgba(247, 187, 77, 0.8); }
        }
        .line-hover {
          position: absolute;
          left: 2.5rem;
          right: 0;
          height: 20px;
          background: rgba(108, 118, 128, 0.3);
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      {/* Floating background code symbols */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <span className="absolute text-[16rem] text-white opacity-10 font-mono font-bold"
          style={{ left: '2%', top: '10%', animation: 'floatUpDown1 5s ease-in-out infinite', textShadow: '0 0 40px #4ec9b0, 0 0 80px #4ec9b0' }}>{'{ '}</span>
        <span className="absolute text-[13rem] text-white opacity-10 font-mono font-bold"
          style={{ left: '80%', top: '5%', animation: 'floatUpDown2 6s ease-in-out infinite', animationDelay: '0.5s', textShadow: '0 0 40px #e37933, 0 0 80px #e37933' }}>{'/>'}</span>
        <span className="absolute text-[8rem] text-white opacity-10 font-mono font-bold"
          style={{ left: '10%', top: '60%', animation: 'floatUpDown1 7s ease-in-out infinite', animationDelay: '1s', textShadow: '0 0 40px #0db9d7, 0 0 80px #0db9d7' }}>{'[ '}</span>
        <span className="absolute text-[12rem] text-white opacity-10 font-mono font-bold"
          style={{ left: '70%', top: '60%', animation: 'floatUpDown2 5.5s ease-in-out infinite', animationDelay: '1.5s', textShadow: '0 0 40px #dcdcaa, 0 0 80px #dcdcaa' }}>{'}'}</span>
      </div>

      {/* Blur overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-[1px] bg-[#25282e]/20" />

      {/* Code editor box */}
      <div
        className="relative z-20 bg-[#23272e] text-white text-3xl font-bold flex items-center justify-center rounded shadow-lg border border-black border-opacity-30 rounded-t-xl"
        style={{ width: '33rem', height: '35rem', left: '17%', top: '14%', position: 'absolute' }}
      >
        {/* Line numbers */}
        <div className="absolute left-3 top-0 h-full flex flex-col items-end pr-5 pt-6 text-xs select-none"
          style={{ width: '2.5rem', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(108, 118, 128, 0.5)' }}>
          {Array.from({ length: 22 }, (_, i) => (
            <span key={i} className="h-5 leading-5 mb-1">{i + 1}</span>
          ))}
        </div>

        {/* Hover line */}
        <div 
          className="line-hover absolute pt-6" 
          style={{ 
            top: '24px',
            animation: 'lineHover 30s ease-in-out infinite, lineMove 30s linear infinite'
          }} 
        />

        {/* Code inside editor */}
        <div
          className="pl-10 pt-0 w-full relative z-10"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 100,
            fontSize: "12px",
          }}
        >
          <span className="block h-5 mb-1"><span style={{ color: "#c792ea" }}>const</span> HomePage = () =&gt; &#123;</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;<span style={{ color: "#c792ea" }}>const</span> [<span style={{ color: "#dcdcaa" }}>isLoaded</span>, <span style={{ color: "#dcdcaa" }}>setIsLoaded</span>] = <span style={{ color: "#82aaff" }}>useState</span>(true);</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;<span style={{ color: "#c792ea" }}>const</span> <span style={{ color: "#dcdcaa" }}>developerInfo</span> = &#123;</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#7fdbca" }}>name</span>: <span style={{ color: "#ecc48d" }}>'axel john nuqui'</span>,</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#7fdbca" }}>role</span>: <span style={{ color: "#ecc48d" }}>'backend dev'</span>,</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#7fdbca" }}>bio</span>: <span style={{ color: "#ecc48d" }}>'turning complex logics into powerful solutions'</span></span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&#125;;</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;<span style={{ color: "#82aaff" }}>useEffect</span>(() =&gt; &#123;</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;document.title = <span style={{ color: "#ecc48d" }}>&#96;&#36;&#123;developerInfo.name&#125; | Portfolio&#96;</span>;</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#dcdcaa" }}>setIsLoaded</span>(true);</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&#125;, []);</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;<span style={{ color: "#c792ea" }}>return</span> (</span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;main</span> className="hero-container"<span style={{ color: "#addb67" }}>&gt;</span></span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;h1&gt;</span>&#123;developerInfo.name&#125;<span style={{ color: "#addb67" }}>&lt;/h1&gt;</span></span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;p&gt;</span>&#123;developerInfo.role&#125;<span style={{ color: "#addb67" }}>&lt;/p&gt;</span></span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;div</span> className="cta"<span style={{ color: "#addb67" }}>&gt;</span></span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;Link</span> href="/projects"<span style={{ color: "#addb67" }}>&gt;</span>View Projects<span style={{ color: "#addb67" }}>&lt;/Link&gt;</span></span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;/div&gt;</span></span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;/main&gt;</span></span>
          <span className="block h-5 mb-1">&nbsp;&nbsp;);</span>
          <span className="block h-5 mb-1">&#125;;</span>
          <span className="block h-5 mb-1"><span style={{ color: "#c792ea" }}>export default</span> HomePage;</span>
        </div>

        {/* Hero content */}
        <div 
          className="absolute z-30 text-white"
          style={{ left: '35rem', top: '3rem', fontFamily: 'Inter, sans-serif', width: '28rem' }}
        >
          <h1 className="text-7xl font-bold mb-4 leading-tight relative">
            {/* Heartbeat glow background */}
            <span 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle, rgba(13,185,215,0.6) 0%, rgba(78,201,176,0.3) 70%, transparent 100%)',
                filter: 'blur(40px)',
                animation: 'heartbeat 2s infinite ease-in-out',
                zIndex: -1
              }}
            />
            <span
              style={{ 
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Axel John<br />
            </span>
            <span
              style={{ 
                background: 'linear-gradient(135deg, #0db9d7 0%, #4ec9b0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              NUQUI
            </span>
          </h1>

          <div className="mb-6">
            <span 
              className="text-2xl font-medium tracking-wide"
              style={{ 
                color: '#f7bb4dff',
                animation: 'glowPulse 2.5s infinite'
              }}
            >
              backend developer
            </span>
          </div>
          
          <p className="text-base leading-relaxed opacity-90 mb-8 font-normal"
            style={{ color: '#cbd5e1', maxWidth: '30rem', lineHeight: '1.7' }}
          >
            An aspiring backend developer that aims to transform complex ideas into progressive logic which results to efficient solutions.
          </p>
          
          <div className="flex gap-4">
            <button
              onClick={() => setActiveFile("projects.html")}
              className="px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #4ec9b0 0%, #0db9d7 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 20px rgba(78, 201, 176, 0.3)',
                border: 'none'
              }}
            >
              View Projects
            </button>
            
            <button
              onClick={() => setActiveFile("contact.css")}
              className="px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background: 'transparent',
                color: '#cbd5e1',
                border: '2px solid rgba(203, 213, 225, 0.3)'
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
