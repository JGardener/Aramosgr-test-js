// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

// Your code

const displayPlayers = () => {
  console.log("----------");
  console.log("Test 1: ");

  data.getPlayers().forEach((player, index) => {
    console.log("PLAYER: ", index + 1);
    console.log("NAME: ", player.name);
    console.log("LASTNAME: ", player.lastname);
    console.log("POSITION: ", player.position);
    console.log("--------");
  });
};

displayPlayers();

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code

const printPlayerNamesLengthDescending = () => {
  console.log("----------");
  console.log("Test 2: ");
  let playerNames = data
    .getPlayers()
    .map((element) => element.name)
    .sort((a, b) => {
      if (a.length < b.length) {
        return 1;
      }
      if (a.length > b.length) {
        return -1;
      }
      return 0;
    });
  console.log(playerNames);
};

printPlayerNamesLengthDescending();

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, each of them has a 0.11 scoringChance, the total number of goals will be 1.1 average
 * Output example -> Goals per match: 2.19
 */

// Your code

const averageGoals = () => {
  console.log("----------");
  console.log("Test 3: ");

  console.log(
    data
      .getPlayers()
      .reduce((a, b) => a + b.scoringChance / 100, 0)
      .toFixed(2)
  );
};

averageGoals();

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code

const printPlayerPosition = (player) => {
  console.log("----------");
  console.log("Test 4: ");

  let person = data.getPlayers().find((element) => element.name === player);
  console.log(person?.position);
};

printPlayerPosition("Florin");

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance.
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

const logMatchScore = () => {
  console.log("----------");
  console.log("Test 5: ");

  let shuffledArray = data.getPlayers().sort(() => Math.random() - 0.5);
  let teamA = shuffledArray.slice(0, shuffledArray.length / 2);
  let teamB = shuffledArray.slice(
    shuffledArray.length / 2,
    shuffledArray.length
  );

  const calculatTeamScoreChance = (array) => {
    let scoreChance = 0;
    for (let i = 0; i < array.length; i++) {
      scoreChance += parseFloat(array[i].scoringChance);
    }
    return scoreChance;
  };

  let teamAScoreChance = calculatTeamScoreChance(teamA);
  let teamBScoreChance = calculatTeamScoreChance(teamB);

  console.log("The score is: ");
  console.log("Team A: ", Math.round(teamAScoreChance / 100));
  console.log("Team B: ", Math.round(teamBScoreChance / 100));
};

logMatchScore();
