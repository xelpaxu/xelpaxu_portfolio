import React from 'react';

const Github = () => {
  // Mock data - replace with your actual GitHub data
  const githubData = {
    username: 'xelpaxu',
    avatar: "/profile.webp",
    bio: 'nothing nada',
    location: 'Iloilo City, Philippines',
    stats: {
      contributions: 1287,
      repositories: 24,
      followers: 156,
      following: 89,
    },
    topRepos: [
      { name: 'awesome-project', description: 'A revolutionary web app', language: 'JavaScript', stars: 42, forks: 7 },
      { name: 'data-visualizer', description: 'Interactive data visualization tool', language: 'Python', stars: 28, forks: 5 },
      { name: 'mobile-app', description: 'Cross-platform mobile application', language: 'React Native', stars: 35, forks: 3 },
    ],
  };

  return (
    <div className="bg-[#1e2528] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
            <h2
            className="text-4xl md:text-6xl font-extrabold mb-6
                      bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 
                      bg-clip-text text-transparent
                      drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]
                      tracking-wide
                      transition-all duration-700
                      hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(56,189,248,0.8)]"
          >
          GITHUB PROFILE
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            My coding journey and contributions
          </p>
        </div>

        <div className="space-y-10">
          {/* Profile Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl border border-gray-700">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iIzAwZmZmZiIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')]"></div>
            </div>
            
            <div className="relative z-10 p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left Column - Avatar and Basic Info */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                    <img 
                      src={githubData.avatar}
                      alt="GitHub Avatar" 
                      className="relative w-36 h-36 rounded-full border-4 border-gray-700 shadow-xl"
                    />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                      {githubData.username}
                    </h2>
                    <p className="text-gray-300 mb-4 max-w-xs">{githubData.bio}</p>
                    
                    <div className="flex items-center gap-2 text-gray-400 mb-6">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>{githubData.location}</span>
                    </div>
                    
                    <a 
                      href="https://github.com/xelpaxu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Profile
                    </a>
                  </div>
                </div>
                
                {/* Right Column - Stats and Visual Elements */}
                <div className="flex-1 w-full">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-cyan-900/30 rounded-lg">
                          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div className="text-3xl font-bold text-cyan-400">{githubData.stats.contributions}</div>
                      </div>
                      <div className="text-gray-400 text-sm">Contributions</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-900/30 rounded-lg">
                          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                        </div>
                        <div className="text-3xl font-bold text-blue-400">{githubData.stats.repositories}</div>
                      </div>
                      <div className="text-gray-400 text-sm">Repositories</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-indigo-900/30 rounded-lg">
                          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </div>
                        <div className="text-3xl font-bold text-indigo-400">{githubData.stats.followers}</div>
                      </div>
                      <div className="text-gray-400 text-sm">Followers</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-900/30 rounded-lg">
                          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                          </svg>
                        </div>
                        <div className="text-3xl font-bold text-purple-400">{githubData.stats.following}</div>
                      </div>
                      <div className="text-gray-400 text-sm">Following</div>
                    </div>
                  </div>
                  
                  {/* Activity Visual */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold mb-4 text-gray-300">Activity Overview</h3>
                    <div className="flex items-center justify-between h-32">
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-2xl font-bold text-cyan-400">1287</div>
                        <div className="text-xs text-gray-400 mt-1">Total</div>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-2xl font-bold text-green-400">15</div>
                        <div className="text-xs text-gray-400 mt-1">Current Streak</div>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-2xl font-bold text-yellow-400">45</div>
                        <div className="text-xs text-gray-400 mt-1">Longest Streak</div>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-2xl font-bold text-purple-400">24</div>
                        <div className="text-xs text-gray-400 mt-1">Best Day</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Repositories Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Top Repositories</h3>
              <a href="https://github.com/xelpaxu" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors duration-200">
                <span>View all</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubData.topRepos.map((repo, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => window.open(`https://github.com/xelpaxu/${repo.name}`, '_blank')}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg">{repo.name}</h4>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {repo.language}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{repo.description}</p>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 3a1 1 0 100-2 1 1 0 000 2zm-3 1a1 1 0 11-2 0 1 1 0 012 0zm7-1a1 1 0 11-2 0 1 1 0 012 0zM3.5 7a1 1 0 100-2 1 1 0 000 2zM2 9a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm1 3a1 1 0 100 2h1a1 1 0 100-2H3zm14-5a1 1 0 11-2 0 1 1 0 012 0zM9 15a1 1 0 100-2 1 1 0 000 2zm3-1a1 1 0 11-2 0 1 1 0 012 0zm-7 3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contribution Activity Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Contribution Activity</h3>
              <a 
                href="https://github.com/xelpaxu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors duration-200"
              >
                <span>View on GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex flex-col items-center">
                {/* Contribution Image */}
                <div className="w-full max-w-4xl overflow-hidden rounded-lg">
                  <img 
                    src="/github_contribution.png" 
                    alt="GitHub Contributions" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                <div className="flex justify-between w-full mt-6 text-gray-400 text-xs">
                  <span>Less</span>
                  <span>More</span>
                </div>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                  My GitHub contribution graph over the past year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;