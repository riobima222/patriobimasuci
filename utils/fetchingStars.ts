export const fetchingStars = async (repo: string) => {
  const response = await fetch(
    `https://api.github.com/repos/riobima222/${repo}/stargazers`
  );
  return await response.json();
};
