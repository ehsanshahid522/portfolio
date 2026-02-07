import React from "react";
import { FaGithub } from "react-icons/fa";

const GITHUB_USERNAME = "ehsanshahid522";

const GitHubOverview = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        // Fetch profile
        const profileRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          headers: {
            "Accept": "application/vnd.github.v3+json"
          }
        });

        if (!profileRes.ok) {
          if (profileRes.status === 403) {
            throw new Error("GitHub API rate limit exceeded. Please try again later.");
          }
          throw new Error(`GitHub Profile Error: ${profileRes.statusText}`);
        }

        const profileJson = await profileRes.json();

        // Fetch top repos
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`, {
          headers: {
            "Accept": "application/vnd.github.v3+json"
          }
        });

        const reposJson = reposRes.ok ? await reposRes.json() : [];

        // Filter out forks for "top repos" if possible, or just take the first few
        const filteredRepos = reposJson
          .filter(repo => !repo.fork)
          .slice(0, 4);

        setData({ ...profileJson, topRepos: filteredRepos.length > 0 ? filteredRepos : reposJson.slice(0, 4) });
      } catch (e) {
        console.error("GitHub Fetch Error:", e);
        setError(e.message || "Unable to load GitHub data right now.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="px-6 py-16 bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
          <FaGithub aria-label="GitHub" className="text-white" />
          <span className="text-white">GitHub Overview</span>
        </h2>

        {loading && (
          <div className="text-center text-[#9ca3af]">Loading GitHub profile…</div>
        )}

        {error && (
          <div className="text-center text-red-500">{error}</div>
        )}

        {!loading && !error && data && (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Profile Box */}
              <div className="lg:col-span-1 bg-[#111111] rounded-2xl p-6 shadow-xl border border-[#2b2b2b]">
                <div className="flex items-center gap-4">
                  <img
                    src={data.avatar_url}
                    alt={data.name || GITHUB_USERNAME}
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#2ea043] shadow-md"
                  />
                  <div>
                    <div className="text-xl font-bold text-white">{data.name || "Ehsan Shahid"}</div>
                    <div className="text-sm text-[#9ca3af]">@{GITHUB_USERNAME}</div>
                  </div>
                </div>
                {data.bio && (
                  <div className="mt-4 text-sm text-[#9ca3af] leading-relaxed">{data.bio}</div>
                )}
                <div className="grid grid-cols-3 gap-4 text-center mt-8">
                  <div>
                    <div className="text-2xl font-bold text-[#2ea043]">{data.public_repos}</div>
                    <div className="text-xs text-[#9ca3af] uppercase tracking-wider font-semibold">Repos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#2ea043]">{data.followers}</div>
                    <div className="text-xs text-[#9ca3af] uppercase tracking-wider font-semibold">Followers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#2ea043]">{data.following}</div>
                    <div className="text-xs text-[#9ca3af] uppercase tracking-wider font-semibold">Following</div>
                  </div>
                </div>
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full text-center bg-[#2ea043] text-white font-bold px-4 py-3 rounded-xl hover:bg-[#268c3a] transition-all flex items-center justify-center gap-2"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>

              {/* Right: Top Repos and Stats */}
              <div className="lg:col-span-2 space-y-8">
                {/* Stats Image */}
                <div className="bg-[#111111] rounded-2xl p-6 shadow-xl border border-[#2b2b2b]">
                  <h3 className="text-lg font-bold mb-4 text-[#2ea043]">GitHub Stats</h3>
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&title_color=2ea043&icon_color=2ea043&text_color=9ca3af&hide_border=true`}
                    alt="GitHub Stats"
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* Top Repos Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.topRepos && data.topRepos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#111111] p-4 rounded-xl shadow-md border border-[#2b2b2b] hover:border-[#2ea043] transition-all group"
                    >
                      <div className="font-bold text-white group-hover:text-[#2ea043] truncate">{repo.name}</div>
                      <div className="text-xs text-[#9ca3af] mt-1 italic">{repo.language || "JavaScript"}</div>
                      <div className="flex items-center gap-3 mt-3 text-sm text-[#9ca3af]">
                        <span className="flex items-center gap-1 group-hover:text-[#2ea043]">⭐ {repo.stargazers_count}</span>
                        <span className="flex items-center gap-1">🍴 {repo.forks_count}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Contribution Graph (Heatmap) */}
            <div className="bg-[#111111] rounded-2xl p-6 shadow-xl border border-[#2b2b2b]">
              <h3 className="text-lg font-bold mb-6 text-[#2ea043] flex items-center gap-2">
                <span>Contribution Activity</span>
              </h3>
              <div className="overflow-x-auto">
                <img
                  src={`https://ghchart.rshah.org/2ea043/${GITHUB_USERNAME}`}
                  alt="GitHub contribution graph heatmap"
                  className="w-full min-w-[700px] h-auto filter brightness-110"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-xs text-center text-[#9ca3af]">
                GitHub Contribution Heatmap (Green Theme) for {GITHUB_USERNAME}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubOverview;
