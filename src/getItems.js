const getLeaderboardItems = async () => {
  let leaderboardItems;

  const list = document.getElementById('leaderboard-list');
  list.innerHTML = '';

  try {
    const leaderboardURL = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }) ;
    leaderboardItems = await leaderboardURL.json();
  } catch (err) {
    console.log('No result found')
  }

  if (leaderboardItems.result.length) {
    leaderboardItems.result.forEach((item) => {
      list.innerHTML += `
      <td>${item.user}:</td>
      <td>${item.score}</td>
      `;
    });
  }
  else {
    list.innerHTML += "<h4>No result found</h4>"
  }
}

export default getLeaderboardItems;