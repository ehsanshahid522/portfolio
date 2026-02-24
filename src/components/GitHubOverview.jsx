import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

const GITHUB_USERNAME = 'ehsanshahid522';

const FALLBACK_DATA = {
  name: 'Ehsan Shahid',
  login: 'ehsanshahid522',
  avatar_url: '/ehsan.jpg',
  bio: 'Software Engineer | Full Stack Developer | AI Enthusiast',
  html_url: 'https://github.com/ehsanshahid522',
  public_repos: 30,
  followers: 25,
  following: 15,
  topRepos: [
    { id: 1, name: 'order-profit', html_url: 'https://github.com/ehsanshahid522/order-profit', language: 'JavaScript', stargazers_count: 5, forks_count: 2 },
    { id: 2, name: 'snapstrom', html_url: 'https://github.com/ehsanshahid522/snapstrom', language: 'JavaScript', stargazers_count: 3, forks_count: 1 },
    { id: 3, name: 'portfolio', html_url: 'https://github.com/ehsanshahid522/portfolio', language: 'JavaScript', stargazers_count: 8, forks_count: 3 },
    { id: 4, name: 'aml-project', html_url: 'https://github.com/ehsanshahid522/aml-project', language: 'Python', stargazers_count: 4, forks_count: 1 },
  ],
};

const GitHubOverview = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!profileRes.ok) throw new Error('API Limit');
        const profileJson = await profileRes.json();
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        let reposJson = reposRes.ok ? await reposRes.json() : [];
        setData({ ...profileJson, topRepos: reposJson.filter(r => !r.fork).slice(0, 4) });
      } catch (e) {
        setData(FALLBACK_DATA);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);



  if (loading) return <div className="h-32 flex items-center justify-center text-[#64748b] text-sm">Loading GitHub data...</div>;

  return (
    <div className="space-y-6">
      {/* Profile */}
      <div className="card p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
        <img src={data.avatar_url} className="w-16 h-16 sm:w-14 sm:h-14 rounded-xl object-cover border border-[#334155]" alt="GitHub" />
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-bold">{data.name}</h3>
          <p className="text-sm text-[#64748b]">@{data.login}</p>
        </div>
        {/* Stats - visible on all screens */}
        <div className="flex gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-xl font-bold text-primary">{data.public_repos}</div>
            <div className="text-xs text-[#64748b]">Repos</div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary">{data.followers}</div>
            <div className="text-xs text-[#64748b]">Followers</div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary">{data.following}</div>
            <div className="text-xs text-[#64748b]">Following</div>
          </div>
        </div>
      </div>

      {/* Top Repos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.topRepos.map((repo, i) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card p-4 sm:p-5 block group"
          >
            <div className="flex items-center justify-between mb-3">
              <FaGithub className="text-[#64748b] group-hover:text-primary transition-colors" />
              <FaExternalLinkAlt className="text-xs text-[#475569] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h4 className="font-semibold mb-1 truncate">{repo.name}</h4>
            <p className="text-xs text-primary mb-3">{repo.language || 'Code'}</p>
            <div className="flex gap-4">
              <span className="flex items-center gap-1 text-xs text-[#64748b]"><FaStar /> {repo.stargazers_count}</span>
              <span className="flex items-center gap-1 text-xs text-[#64748b]"><FaCodeBranch /> {repo.forks_count}</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Contribution chart - mobile shows last 6 months, desktop shows full */}
      <div className="card p-4 sm:p-6">
        <p className="text-sm text-[#64748b] mb-4">Contribution Activity</p>
        {/* Desktop: full scrollable graph */}
        <div className="hidden sm:block overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`}
            alt="GitHub Contributions"
            className="w-full min-w-[700px] h-auto"
          />
        </div>
        {/* Mobile: crop to show only right side (today / last ~6 months) */}
        <div className="sm:hidden overflow-hidden" style={{ direction: 'rtl' }}>
          <img
            src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`}
            alt="GitHub Contributions"
            className="h-auto min-w-[700px]"
            style={{ direction: 'ltr' }}
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubOverview;
