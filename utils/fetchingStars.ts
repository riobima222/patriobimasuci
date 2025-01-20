export const fetchingStars = async (repo: string) => {
  const response = await fetch(
    `https://api.github.com/repos/riobima222/${repo}/stargazers`, {
      method: "GET",
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      }
    }
  );
  return await response.json();
};
