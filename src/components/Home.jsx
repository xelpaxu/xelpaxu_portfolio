export default function Home() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Animated code symbols background */}
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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <span className="absolute text-[16rem] text-white opacity-10 font-mono font-bold" style={{ left: '2%', top: '10%', animation: 'floatUpDown1 5s ease-in-out infinite', animationDelay: '0s', textShadow: '0 0 40px #4ec9b0, 0 0 80px #4ec9b0' }}>{'{ '}</span>
        <span className="absolute text-[13rem] text-white opacity-10 font-mono font-bold" style={{ left: '80%', top: '5%', animation: 'floatUpDown2 6s ease-in-out infinite', animationDelay: '0.5s', textShadow: '0 0 40px #e37933, 0 0 80px #e37933' }}>{'/>'}</span>
        <span className="absolute text-[8rem] text-white opacity-10 font-mono font-bold" style={{ left: '10%', top: '60%', animation: 'floatUpDown1 7s ease-in-out infinite', animationDelay: '1s', textShadow: '0 0 40px #0db9d7, 0 0 80px #0db9d7' }}>{'[ '}</span>
        <span className="absolute text-[12rem] text-white opacity-10 font-mono font-bold" style={{ left: '70%', top: '60%', animation: 'floatUpDown2 5.5s ease-in-out infinite', animationDelay: '1.5s', textShadow: '0 0 40px #dcdcaa, 0 0 80px #dcdcaa' }}>{'}'}</span>
      </div>
      {/* Blur overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-[1px] bg-[#25282e]/20" />
      
      {/* Code editor box */}
      <div
        className="relative z-20 bg-[#23272e] text-white text-3xl font-bold flex items-center justify-center rounded shadow-lg border border-black border-opacity-30 rounded-t-xl"
        style={{ width: '33rem', height: '35rem', left: '17%', top: '14%', position: 'absolute' }}
      >
        <div className="absolute left-3 top-0 h-full flex flex-col items-end pr-5 pt-6 text-xs select-none" style={{ width: '2.5rem', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(108, 118, 128, 0.5)', fontWeight: 400, letterSpacing: '0.08em' }}>
          {Array.from({ length: 22 }, (_, i) => (
            <span key={i} className="h-5 leading-5 mb-1">{i + 1}</span>
          ))}
        </div>
        
        {/* Single moving hover line */}
        <div 
          className="line-hover absolute pt-6" 
          style={{ 
            top: '24px',
            animation: 'lineHover 30s ease-in-out infinite, lineMove 30s linear infinite'
          }} 
        />

        <style>{`
          @keyframes lineMove {
            0% { top: 24px; }
            4.5% { top: 44px; }
            9% { top: 64px; }
            13.5% { top: 84px; }
            18% { top: 104px; }
            22.5% { top: 124px; }
            27% { top: 144px; }
            31.5% { top: 164px; }
            36% { top: 184px; }
            40.5% { top: 204px; }
            45% { top: 224px; }
            49.5% { top: 244px; }
            54% { top: 264px; }
            58.5% { top: 284px; }
            63% { top: 304px; }
            67.5% { top: 324px; }
            72% { top: 344px; }
            76.5% { top: 364px; }
            81% { top: 384px; }
            85.5% { top: 404px; }
            90% { top: 424px; }
            94.5% { top: 444px; }
            100% { top: 24px; }
          }
        `}</style>

          <div
            className="pl-10 pt-6 w-full relative z-10"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontWeight: 100,
              fontSize: "12px",
            }}
          >
            <span className="block h-5 leading-3 mb-1"><span style={{ color: "#c792ea" }}>const</span> HomePage = () =&gt; &#123;</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;<span style={{ color: "#c792ea" }}>const</span> [<span style={{ color: "#dcdcaa" }}>isLoaded</span>, <span style={{ color: "#dcdcaa" }}>setIsLoaded</span>] = <span style={{ color: "#82aaff" }}>useState</span>(true);</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;<span style={{ color: "#c792ea" }}>const</span> <span style={{ color: "#dcdcaa" }}>developerInfo</span> = &#123;</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#7fdbca" }}>name</span>: <span style={{ color: "#ecc48d" }}>'axel john nuqui'</span>,</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#7fdbca" }}>role</span>: <span style={{ color: "#ecc48d" }}>'backend dev'</span>,</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#7fdbca" }}>bio</span>: <span style={{ color: "#ecc48d" }}>'turning complex logics into powerful solutions'</span></span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&#125;;</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;<span style={{ color: "#82aaff" }}>useEffect</span>(() =&gt; &#123;</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;document.title = <span style={{ color: "#ecc48d" }}>&#96;&#36;&#123;developerInfo.name&#125; | Portfolio&#96;</span>;</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#dcdcaa" }}>setIsLoaded</span>(true);</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&#125;, []);</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;<span style={{ color: "#c792ea" }}>return</span> (</span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;main</span> className="hero-container"<span style={{ color: "#addb67" }}>&gt;</span></span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;h1&gt;</span>&#123;developerInfo.name&#125;<span style={{ color: "#addb67" }}>&lt;/h1&gt;</span></span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;p&gt;</span>&#123;developerInfo.role&#125;<span style={{ color: "#addb67" }}>&lt;/p&gt;</span></span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;div</span> className="cta"<span style={{ color: "#addb67" }}>&gt;</span></span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;Link</span> href="/projects"<span style={{ color: "#addb67" }}>&gt;</span>View Projects<span style={{ color: "#addb67" }}>&lt;/Link&gt;</span></span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;/div&gt;</span></span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#addb67" }}>&lt;/main&gt;</span></span>
            <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;);</span>
            <span className="block h-5 leading-3 mb-1">&#125;;</span>
            <span className="block h-5 leading-3 mb-1"><span style={{ color: "#c792ea" }}>export default</span> HomePage;</span>
          </div>

        {/* Hero content on the right */}
        <div 
          className="absolute z-30 text-white"
          style={{ 
            left: '35rem', 
            top: '3rem',
            fontFamily: 'Inter, sans-serif',
            width: '28rem'
          }}
        >
          <h1 className="text-7xl font-bold mb-4 leading-tight">
            <span
              style={{ 
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              Axel John<br />
            </span>
            <span
              style={{ 
                background: 'linear-gradient(135deg, #0db9d7 0%, #4ec9b0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(13, 185, 215, 0.5)'
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
                textShadow: '0 0 20px rgba(78, 201, 176, 0.4)'
              }}
            >
              backend developer
            </span>
          </div>
          
          <p 
            className="text-base leading-relaxed opacity-90 mb-8 font-normal"
            style={{ 
              color: '#cbd5e1',
              maxWidth: '30rem',
              lineHeight: '1.7'
            }}
          >
            An aspiring backend developer that aims to transform complex ideas into progressive logic which results to efficient solutions.
          </p>
          
          <div className="flex gap-4">
            <button 
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
              className="px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background: 'transparent',
                color: '#cbd5e1',
                border: '2px solid rgba(203, 213, 225, 0.3)',
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