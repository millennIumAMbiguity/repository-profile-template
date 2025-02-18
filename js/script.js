import { username, additionalRepos } from "./data.js";
import { formatRepo } from "./template.js";

async function fetchRepos() {
  // Set tab title
  document.title = username;

  // Add title to page
  const title = document.createElement("a");
  title.setAttribute("href", "https://github.com/" + username);
  title.innerHTML = "<h1>" + username + "</h1>";
  document.body.appendChild(title);

  // Add container for repos
  const repoContainer = document.createElement("div");
  document.body.appendChild(repoContainer);

  // Fetch repos
  const response = await fetch(
    "https://api.github.com/users/" + username + "/repos"
  );
  let repos = await response.json();

  // Fetch additional repos
  await Promise.all(
    additionalRepos.map(async (repo) => {
      try {
        const response = await fetch("https://api.github.com/repos/" + repo);
        const data = await response.json();
        repos.push(data);
      } catch (error) {
        console.error("Error fetching repo: " + repo, error);
      }
    })
  );

  // Sort by stars
  repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  // Sort by last updated
  //repos = repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  repos.forEach((repo) => {
    // Skip forks
    if (repo.fork) return;

    // Add repo html to the container
    repoContainer.appendChild(formatRepo(document, repo));
  });
}

fetchRepos();
