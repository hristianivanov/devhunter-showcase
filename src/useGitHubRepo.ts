import { useEffect, useState } from "react";

const REPO = "hristianivanov/ITJob-Finder-ASP.NET-MVC";

export interface GitHubRepo {
  updatedAt: string;
}

export function useGitHubRepo() {
  const [data, setData] = useState<GitHubRepo | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO}`)
      .then((r) => r.json())
      .then((json) =>
        setData({
          updatedAt: new Date(json.updated_at).toLocaleDateString("en-GB", {
            month: "short",
            year: "numeric",
          }),
        })
      )
      .catch(() => {});
  }, []);

  return data;
}
