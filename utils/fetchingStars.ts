export const chattingApp = async () => {
  const response = await fetch(
    "https://api.github.com/repos/riobima222/chatting-app/stargazers"
  );
  return await response.json();
};

export const personalBlog = async () => {
  const response = await fetch(
    "https://api.github.com/repos/riobima222/personal-blog/stargazers"
  );
  return await response.json();
};

export const portfolio = async () => {
  const response = await fetch(
    "https://api.github.com/repos/riobima222/portfolio./stargazers"
  );
  return await response.json();
};

export const sigmaBlog = async () => {
  const response = await fetch(
    "https://api.github.com/repos/riobima222/sigma-blog/stargazers"
  );
  return await response.json();
};

export const sigmaTodoList = async () => {
  const response = await fetch(
    "https://api.github.com/repos/riobima222/sigma-todo-list/stargazers"
  );
  return await response.json();
};

export const sigmaStore = async () => {
  const response = await fetch(
    "https://api.github.com/repos/riobima222/sigma_store/stargazers"
  );
  return await response.json();
};
