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
      `}</style>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <span className="absolute text-[16rem] text-white opacity-10 font-mono font-bold" style={{ left: '2%', top: '10%', animation: 'floatUpDown1 5s ease-in-out infinite', animationDelay: '0s', textShadow: '0 0 40px #4ec9b0, 0 0 80px #4ec9b0' }}>{'{ '}</span>
        <span className="absolute text-[13rem] text-white opacity-10 font-mono font-bold" style={{ left: '80%', top: '5%', animation: 'floatUpDown2 6s ease-in-out infinite', animationDelay: '0.5s', textShadow: '0 0 40px #e37933, 0 0 80px #e37933' }}>{'/>'}</span>
        <span className="absolute text-[8rem] text-white opacity-10 font-mono font-bold" style={{ left: '10%', top: '60%', animation: 'floatUpDown1 7s ease-in-out infinite', animationDelay: '1s', textShadow: '0 0 40px #0db9d7, 0 0 80px #0db9d7' }}>{'[ '}</span>
        <span className="absolute text-[12rem] text-white opacity-10 font-mono font-bold" style={{ left: '70%', top: '60%', animation: 'floatUpDown2 5.5s ease-in-out infinite', animationDelay: '1.5s', textShadow: '0 0 40px #dcdcaa, 0 0 80px #dcdcaa' }}>{'}'}</span>
      </div>
      {/* Blur overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-[1px] bg-[#25282e]/20" />
      {/* Main content placeholder */}
      <div
        className="relative z-20 bg-[#23272e] text-white text-3xl font-bold flex items-center justify-center rounded shadow-lg border border-black border-opacity-30 rounded-t-xl"
        style={{ width: '33rem', height: '35rem', left: '17%', top: '14%', position: 'absolute' }}
      >
        <div className="absolute left-3 top-0 h-full flex flex-col items-end pr-5 pt-6 text-xs select-none" style={{ width: '2.5rem', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(108, 118, 128, 0.5)', fontWeight: 400, letterSpacing: '0.08em' }}>
          {Array.from({ length: 22 }, (_, i) => (
            <span key={i} className="h-5 leading-5 mb-1">{i + 1}</span>
          ))}
        </div>
          <div
            className="pl-16 pt-6 w-full"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontWeight: 100,
              color: "#d4d4d4",
              fontSize: "12px",
            }}
          >
          <span className="block h-5 leading-3 mb-1">const HomePage = () =&gt; &#123;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;const [isLoaded, setIsLoaded] = useState(true);</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;const developerInfo = &#123;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;name: 'Nitin Ranganath',</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;role: 'Full Stack Developer',</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;bio: 'Building modern web experiences'</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&#125;;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;useEffect(() =&gt; &#123;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;document.title = &#96;&#36;&#123;developerInfo.name&#125; | Portfolio&#96;;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;setIsLoaded(true);</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&#125;, []);</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;return (</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;main className="hero-container"&gt;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;&#123;developerInfo.name&#125;&lt;/h1&gt;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&#123;developerInfo.role&#125;&lt;/p&gt;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="cta"&gt;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link href="/projects"&gt;View Projects&lt;/Link&gt;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/main&gt;</span>
          <span className="block h-5 leading-3 mb-1">&nbsp;&nbsp;);</span>
          <span className="block h-5 leading-3 mb-1">&#125;;</span>
          <span className="block h-5 leading-3 mb-1">export default HomePage;</span>
          </div>
      </div>
    </div>
  );
}