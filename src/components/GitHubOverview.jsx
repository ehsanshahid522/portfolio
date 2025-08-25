import React from "react";

const GITHUB_USERNAME = "ehsanshahid522";

const GitHubOverview = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!res.ok) throw new Error("Failed to load GitHub profile");
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError("Unable to load GitHub data right now.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return (
    <section className="px-6 py-16 bg-white dark:bg-[#111111] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">🧑‍💻 GitHub Overview</h2>

        {loading && (
          <div className="text-center text-[#374151] dark:text-[#9ca3af]">Loading GitHub profile…</div>
        )}

        {error && (
          <div className="text-center text-red-500">{error}</div>
        )}

        {!loading && !error && data && (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Box 1: Profile + Stats */}
              <div className="bg-[#f3f4f6] dark:bg-[#1f1f1f] rounded-xl p-6 shadow">
                <div className="flex items-center gap-4">
                  <img
                    src={data.avatar_url}
                    alt={data.name || GITHUB_USERNAME}
                    className="w-16 h-16 rounded-full object-cover border border-gray-300 dark:border-gray-700"
                  />
                  <div>
                    <div className="text-xl font-semibold">{data.name || "GitHub User"}</div>
                    <div className="text-sm text-[#6b7280] dark:text-[#9ca3af]">@{GITHUB_USERNAME}</div>
                  </div>
                </div>
                {data.bio && (
                  <div className="mt-3 text-sm text-[#374151] dark:text-[#9ca3af]">{data.bio}</div>
                )}
                <div className="grid grid-cols-3 gap-4 text-center mt-6">
                  <div>
                    <div className="text-2xl font-bold text-[#facc15]">{data.public_repos}</div>
                    <div className="text-xs text-[#6b7280] dark:text-[#9ca3af]">Repos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#facc15]">{data.followers}</div>
                    <div className="text-xs text-[#6b7280] dark:text-[#9ca3af]">Followers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#facc15]">{data.following}</div>
                    <div className="text-xs text-[#6b7280] dark:text-[#9ca3af]">Following</div>
                  </div>
                </div>
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-center bg-[#000000] text-white px-4 py-2 rounded-lg hover:opacity-90"
                >
                  View on GitHub
                </a>
              </div>

              {/* Box 2: GitHub Readme Stats */}
              <div className="bg-[#f3f4f6] dark:bg-[#1f1f1f] rounded-xl p-4 shadow">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&title_color=facc15&icon_color=facc15`}
                  alt="GitHub Stats"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Full-width: Contribution Graph below the two boxes */}
            <div className="bg-[#f3f4f6] dark:bg-[#1f1f1f] rounded-xl p-4 shadow overflow-x-auto">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&hide_border=true&bg_color=00000000&color=9ca3af&line=facc15&point=facc15&area=true`}
                alt="GitHub contribution graph for the last year"
                className="w-full min-w-[720px] h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubOverview;



