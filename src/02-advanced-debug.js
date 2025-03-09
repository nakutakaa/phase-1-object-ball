function getGameData(inputObject, currentPath = "", output = []) {
  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      const newKey = currentPath ? `${currentPath}.${key}` : key;
      if (
        typeof inputObject[key] === "object" &&
        !Array.isArray(inputObject[key])
      ) {
        // Recursively traverse nested objects
        getGameData(inputObject[key], newKey, output);
      } else {
        // Add the key to the result array
        output.push(newKey);
      }
    }
  }
  return output;
}
function numPointsScored(gameObject, playerName) {
  // Check the home team players
  if (gameObject.home.Players[playerName]) {
    return gameObject.home.Players[playerName].points;
  }
  // Check the away team players
  else if (gameObject.away.players[playerName]) {
    return gameObject.away.players[playerName].points;
  }
  // If the player is not found, return a message or null
  else {
    return "Player not found";
  }
}
const BenGordon = numPointsScored(gameObject, "Ben_Gordon");
console.log(BenGordon);
function shoeSize(gameObject, playerName) {
  // Check the home team players
  if (gameObject.home.Players[playerName]) {
    return gameObject.home.Players[playerName].shoe;
  }
  // Check the away team players
  else if (gameObject.away.players[playerName]) {
    return gameObject.away.players[playerName].shoe;
  }
  // If the player is not found, return either a message or null
  else {
    return "Player not found";
  }
}
const jeffAdrien = shoeSize(gameObject, "Jeff_Adrien");
console.log(jeffAdrien);
function teamColors(gameObject, teamName) {
  // Check if the teamName matches the home team
  if (gameObject.home.teamName === teamName) {
    return gameObject.home.Colors;
  }
  // Check whether teamName matches the away team
  else if (gameObject.away.teamName === teamName) {
    return gameObject.away.colors;
  }
  // If the teamName doesn't match any team, return an empty array
  else {
    return [];
  }
}
console.log(teamColors(gameObject, "Charlotte_Hornets"));
console.log(teamColors(gameObject, 'charlotte_Hornets'));
console.log(teamColors(gameObject, "Charlotte_Hornets"));
function TeamNames(gameObject) {
  // Extraction of team names from the home and away objects
  const homeTeamName = gameObject.home.teamName;
  const awayTeamName = gameObject.away.teamName;

  // we are returning the team names as an array
  return [homeTeamName, awayTeamName];
}
const teamNames = TeamNames(gameObject);
console.log(teamNames);
function PlayerNumbers(gameObject) {
  const playerNumbers = [];

  // Extract the player numbers from the home team
  for (const player in gameObject.home.Players) {
    playerNumbers.push(gameObject.home.Players[player].number);
  }

  // here we extract player numbers from the away team
  for (const player in gameObject.away.players) {
    playerNumbers.push(gameObject.away.players[player].number);
  }

  return playerNumbers;
}
console.log(PlayerNumbers(gameObject));
function PlayerStats(gameObject, playerName) {
  // Check at the home team players
  if (gameObject.home.Players[playerName]) {
    return gameObject.home.Players[playerName];
  }
  // Checking the away team players
  else if (gameObject.away.players[playerName]) {
    return gameObject.away.players[playerName];
  }
  // return null or a message if the player is not found
  else {
    return null; // or return "no player indentified";
  }
}
function PlayerStats(playerName, gameObject) {
  // Check the home team players
  if (gameObject.home.Players[playerName]) {
    return gameObject.home.Players[playerName];
  }
  // Check at the away team players
  else if (gameObject.away.players[playerName]) {
    return gameObject.away.players[playerName];
  }
  // return null or a message,If the player is not found,
  else {
    return null; // or return "Player not found";
  }
}
const playerStats = PlayerStats("Reggie_Evans", gameObject);
console.log(playerStats);
function bigShoeRebounds(gameObject) {
  let largestShoeSize = 0;
  let rebounds = 0;
  let playerName = "";

  // Iterating through the home and away teams
  for (const team in gameObject) {
    const players = gameObject[team].Players || gameObject[team].players;

    // ''
    for (const player in players) {
      const playerStats = players[player];

      // Checking if the current player has the largest shoe size
      if (playerStats.shoe > largestShoeSize) {
        largestShoeSize = playerStats.shoe;
        rebounds = playerStats.rebounds;
        playerName = player; // Track the player's name
      }
    }
  }

  return { playerName, rebounds, largestShoeSize };
}
const result = bigShoeRebounds(gameObject);
console.log(`Player with the largest shoe size: ${result.playerName}`);
console.log(`Rebounds: ${result.rebounds}`);
console.log(`Shoe Size: ${result.largestShoeSize}`);
function mostPointsScored(gameObject) {
  let maxPoints = 0;
  let playerWithMostPoints = "";

  for (const team in gameObject) {
    const players = gameObject[team].players;
    for (const player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        playerWithMostPoints = player;
      }
    }
  }

  return playerWithMostPoints;
}
console.log("Player with the most points:", mostPointsScored(gameObject));
function playerWithLongestName(gameObject) {
  let longestNameLength = 0;
  let playerWithLongestName = "";

  for (const team in gameObject) {
    const players = gameObject[team].players;
    for (const player in players) {
      if (player.length > longestNameLength) {
        longestNameLength = player.length;
        playerWithLongestName = player;
      }
    }
  }

  return playerWithLongestName;
}
console.log("Player with the longest name:", playerWithLongestName(gameObject));

function winningTeam(gameObject) {
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;

  // Calculate total points for home team
  for (const player in gameObject.home.players) {
    homeTeamPoints += gameObject.home.players[player].points;
  }

  // Calculate total points for away team
  for (const player in gameObject.away.players) {
    awayTeamPoints += gameObject.away.players[player].points;
  }

  // Determine the winning team
  if (homeTeamPoints > awayTeamPoints) {
    return gameObject.home.teamName;
  } else {
    return gameObject.away.teamName;
  }
}
console.log("Winning team:", winningTeam(gameObject));
