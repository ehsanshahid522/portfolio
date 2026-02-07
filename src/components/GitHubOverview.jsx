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
        const profileRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!profileRes.ok) throw new Error("Failed to load GitHub profile");
        const profileJson = await profileRes.json();

        // Fetch top repos
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=4`);
        const reposJson = reposRes.ok ? await reposRes.json() : [];

        setData({ ...profileJson, topRepos: reposJson });
      } catch (e) {
        setError("Unable to load GitHub data right now.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="px-6 py-16 bg-white dark:bg-[#111111] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <FaGithub aria-label="GitHub" className="text-[#000000] dark:text-white" />
          <span>GitHub Overview</span>
        </h2>

        {loading && (
          <div className="text-center text-[#374151] dark:text-[#9ca3af]">Loading GitHub profile…</div>
        )}

        {error && (
          <div className="text-center text-red-500">{error}</div>
        )}

        {!loading && !error && data && (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Profile Box */}
              <div className="lg:col-span-1 bg-[#f3f4f6] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-lg border border-transparent dark:border-[#2b2b2b]">
                <div className="flex items-center gap-4">
                  <img
                    src={data.avatar_url}
                    alt={data.name || GITHUB_USERNAME}
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#facc15] shadow-md"
                  />
                  <div>
                    <div className="text-xl font-bold">{data.name || "Ehsan Shahid"}</div>
                    <div className="text-sm text-[#6b7280] dark:text-[#9ca3af]">@{GITHUB_USERNAME}</div>
                  </div>
                </div>
                {data.bio && (
                  <div className="mt-4 text-sm text-[#374151] dark:text-[#9ca3af] leading-relaxed">{data.bio}</div>
                )}
                <div className="grid grid-cols-3 gap-4 text-center mt-8">
                  <div>
                    <div className="text-2xl font-bold text-[#facc15]">{data.public_repos}</div>
                    <div className="text-xs text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wider font-semibold">Repos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#facc15]">{data.followers}</div>
                    <div className="text-xs text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wider font-semibold">Followers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#facc15]">{data.following}</div>
                    <div className="text-xs text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wider font-semibold">Following</div>
                  </div>
                </div>
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full text-center bg-[#000000] dark:bg-[#facc15] text-white dark:text-black font-bold px-4 py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>

              {/* Right: Top Repos and Stats */}
              <div className="lg:col-span-2 space-y-8">
                {/* Stats Image */}
                <div className="bg-[#f3f4f6] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-lg border border-transparent dark:border-[#2b2b2b]">
                  <h3 className="text-lg font-bold mb-4 text-[#facc15]">GitHub Stats</h3>
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&title_color=facc15&icon_color=facc15&text_color=9ca3af&hide_border=true`}
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
                      className="bg-[#f3f4f6] dark:bg-[#1f1f1f] p-4 rounded-xl shadow-md border border-transparent hover:border-[#facc15] transition-all group"
                    >
                      <div className="font-bold text-[#000000] dark:text-white group-hover:text-[#facc15] truncate">{repo.name}</div>
                      <div className="text-xs text-[#6b7280] dark:text-[#9ca3af] mt-1 italic">{repo.language || "JavaScript"}</div>
                      <div className="flex items-center gap-3 mt-3 text-sm">
                        <span className="flex items-center gap-1">⭐ {repo.stargazers_count}</span>
                        <span className="flex items-center gap-1">🍴 {repo.forks_count}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Contribution Graph (Heatmap) */}
            <div className="bg-[#f3f4f6] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-lg border border-transparent dark:border-[#2b2b2b]">
              <h3 className="text-lg font-bold mb-6 text-[#facc15] flex items-center gap-2">
                <span>Contribution Activity</span>
              </h3>
              <div className="overflow-x-auto">
                <img
                  src={`https://ghchart.rshah.org/facc15/${GITHUB_USERNAME}`}
                  alt="GitHub contribution graph heatmap"
                  className="w-full min-w-[700px] h-auto"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-xs text-center text-[#6b7280] dark:text-[#9ca3af]">
                GitHub Contribution Heatmap for {GITHUB_USERNAME}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubOverview;



