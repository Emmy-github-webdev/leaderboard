const addLeaderboardItems = async () => {
  const score = document.getElementById('scoreInput');
  const name = document.getElementById('nameInput');
  const error = document.getElementById('ErrorMessage');

  if (name.value.length && score.value.length) {
    try {
      await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gKX6ORGkPPBMcNp9S7oe/scores', {
        method: 'POST',
        body: JSON.stringify({
          user: name.value,
          score: score.value,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      score.value = '';
      name.value = '';
    } catch (err) {
      console.error(err);
    }
  } else {
    error.style.display = 'block';
  }
};

export default addLeaderboardItems;