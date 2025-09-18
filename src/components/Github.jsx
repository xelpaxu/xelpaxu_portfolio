import React from 'react';

const Github = () => {
  // Mock data - replace with your actual GitHub data
  const githubData = {
    username: 'xelpaxu',
    avatar: "/profile.webp",
    bio: 'Full-stack developer passionate about open source',
    location: 'Iloilo City, Philippines',
    contributions: 1287,
    repositories: 24,
    followers: 156,
    following: 89,
    topRepos: [
      { name: 'awesome-project', description: 'A revolutionary web app', language: 'JavaScript', stars: 42, forks: 7 },
      { name: 'data-visualizer', description: 'Interactive data visualization tool', language: 'Python', stars: 28, forks: 5 },
      { name: 'mobile-app', description: 'Cross-platform mobile application', language: 'React Native', stars: 35, forks: 3 },
    ],
    contributionStats: {
      totalContributions: 1287,
      currentStreak: 15,
      longestStreak: 45,
      bestDay: 24,
    }
  };

  return (
    <div className="bg-[#1e2528] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl md:text-5xl font-extrabold mb-4
                      bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 
                      bg-clip-text text-transparent
                      drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]
                      tracking-wide
                      transition-all duration-700
                      hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(56,189,248,0.8)]"
          >
            GITHUB PROFILE
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out my contributions, repositories, and coding activity on GitHub.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex flex-col items-center">
                <img 
                  src={githubData.avatar}
                  alt="GitHub Avatar" 
                  className="w-24 h-24 rounded-full border-4 border-gray-600 shadow-lg mb-4"
                />
                <h2 className="text-xl font-bold">{githubData.username}</h2>
                <p className="text-gray-300 text-center mt-2 text-sm">{githubData.bio}</p>
                <div className="mt-3 text-xs text-gray-400">
                  <p>📍 {githubData.location}</p>
                </div>
                <a 
                  href="https://github.com/xelpaxu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-600 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-cyan-400">{githubData.contributions}</p>
                  <p className="text-gray-300 text-xs">Contributions</p>
                </div>
                <div className="bg-gray-600 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-blue-400">{githubData.repositories}</p>
                  <p className="text-gray-300 text-xs">Repositories</p>
                </div>
                <div className="bg-gray-600 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-indigo-400">{githubData.followers}</p>
                  <p className="text-gray-300 text-xs">Followers</p>
                </div>
                <div className="bg-gray-600 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-purple-400">{githubData.following}</p>
                  <p className="text-gray-300 text-xs">Following</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Repositories & Contributions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Repositories */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Top Repositories</h3>
                <a href="https://github.com/xelpaxu" className="text-cyan-400 hover:text-cyan-300 text-sm">View All</a>
              </div>
              <div className="space-y-4">
                {githubData.topRepos.map((repo, index) => (
                  <div key={index} className="border border-gray-600 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{repo.name}</h4>
                      <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                        {repo.language}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">{repo.description}</p>
                    <div className="flex space-x-4 mt-3 text-sm text-gray-400">
                      <span>⭐ {repo.stars}</span>
                      <span>🔀 {repo.forks}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution Stats & Graph */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Contribution Activity</h3>
              
              {/* Contribution Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-xl font-bold text-cyan-400">{githubData.contributionStats.totalContributions}</p>
                  <p className="text-gray-300 text-xs">Total Contributions</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-xl font-bold text-green-400">{githubData.contributionStats.currentStreak}</p>
                  <p className="text-gray-300 text-xs">Current Streak</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-xl font-bold text-yellow-400">{githubData.contributionStats.longestStreak}</p>
                  <p className="text-gray-300 text-xs">Longest Streak</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-xl font-bold text-purple-400">{githubData.contributionStats.bestDay}</p>
                  <p className="text-gray-300 text-xs">Best Day</p>
                </div>
              </div>
              
              {/* Contribution Graph */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-center">
                  <div className="inline-block">
                    <div className="flex space-x-1">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-green-700 rounded-sm"></div>
                      ))}
                    </div>
                    <div className="flex space-x-1 mt-1">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-green-600 rounded-sm"></div>
                      ))}
                    </div>
                    <div className="flex space-x-1 mt-1">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-sm ${
                          i % 4 === 0 ? 'bg-green-500' : 'bg-green-600'
                        }`}></div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-400 text-xs mt-3">Last 15 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;