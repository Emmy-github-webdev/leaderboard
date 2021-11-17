/* eslint-disable import/no-cycle */
import './css/styles.css';
import leaderboardItems from './getItems.js';

const getLeaderboardItem = () => {
  leaderboardItems.forEach((leaderboardItem) => {
    const list = document.getElementById('leaderboard-list');
    const listLi = document.createElement('tr');
    listLi.innerHTML = `
     <td>${leaderboardItem.name}:</td>
     <td>${leaderboardItem.score}</td>
    `;

    list.appendChild(listLi);
  });
};

getLeaderboardItem();