import './css/styles.css';
import getLeaderboardItems from './getItems.js';
import addLeaderboardItems from './addItem.js';

window.onload = async () => {
  const submitItem = document.getElementById('submitButton');
  const refreshItem = document.getElementById('refresh');

  getLeaderboardItems();

  submitItem.addEventListener('click', addLeaderboardItems);
  refreshItem.addEventListener('click', getLeaderboardItems);
};
