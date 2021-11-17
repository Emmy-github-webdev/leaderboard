import './css/styles.css';
import getLeaderboardItems from './getItems.js';

window.onload = async () => {
  const refreshItem = document.getElementById('refresh');
  getLeaderboardItems();

  refreshItem.addEventListener('click', getLeaderboardItems);
};
