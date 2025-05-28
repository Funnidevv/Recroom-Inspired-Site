// Responsive Navigation Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Mock Leaderboard Data
const leaderboardData = [
  { name: 'PlayerOne', score: 1500 },
  { name: 'GamerGirl', score: 1450 },
  { name: 'VRMaster', score: 1400 },
  { name: 'NoobSlayer', score: 1350 },
  { name: 'QuestKing', score: 1300 },
];

// Populate Leaderboard
const leaderboardList = document.getElementById('leaderboard-list');
leaderboardData.forEach(player => {
  const li = document.createElement('li');
  li.textContent = `${player.name} - ${player.score} pts`;
  leaderboardList.appendChild(li);
});

// Mock News Articles
const newsArticles = [
  { title: 'Beta Launch Announced!', content: 'Join our beta testing phase starting next week.' },
  { title: 'New Game Modes', content: 'Introducing Capture the Flag and Paintball modes.' },
];

// Populate News Section
const newsContainer = document.getElementById('news-articles');
newsArticles.forEach(article => {
  const articleDiv = document.createElement('div');
  const title = document.createElement('h3');
  const content = document.createElement('p');

  title.textContent = article.title;
  content.textContent = article.content;

  articleDiv.appendChild(title);
  articleDiv.appendChild(content);
  newsContainer.appendChild(articleDiv);
});

// Download Button Functionality
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  alert('Thank you for joining the beta! Download link will be sent to your email.');
});
