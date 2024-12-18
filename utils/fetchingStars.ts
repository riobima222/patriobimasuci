export const chattingApp = async () => {
     const response = await fetch(
       "https://api.github.com/repos/riobima222/chatting-app/stargazers"
     );
     return await response.json();
     
}