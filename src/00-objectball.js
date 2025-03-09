gameObject = {
  home: {
    teamName: "Brooklyn Nets",
    Colors: ["black " , "white"],
    Players: {
      'Alan_Anderson': {
        'number': 0,
        'shoe': 16,
        'points': 22,
        'rebounds': 12,
        'assists': 12,
        'steals': 3,
        'blocks': 1,
        'slam_dunks': 1,
      },
      'Reggie_Evans': {
        'number': 30,
        'shoe': 14,
        'points': 12,
        'rebounds': 12,
        'assists': 12,
        'steals': 12,
        'blocks': 12,
        'slam_dunks': 7,
      },
      'Brook_Lopez': {
        'number': 11,
        'shoe': 17,
        'points': 17,
        'rebounds': 19,
        'assists': 10,
        'steals': 3,
        'blocks': 1,
        'slam_dunks': 15,
      },
      'Mason_Plumlee': {
        'number': 1,
        'shoe': 19,
        'points': 26,
        'rebounds': 12,
        'assists': 6,
        'steals': 3,
        'blocks': 8,
        'slam_dunks': 5,
      },
      'Jason_Terry': {
        'number': 31,
        'shoe': 15,
        'points': 19,
        'rebounds': 2,
        'assists': 2,
        'steals': 4,
        'blocks': 11,
        'slam_dunks': 1,
      },
    },
  },
  away: {
    teamName: "Charlotte_Hornets",
    colors: ["Turquoise" , "Purple"],
    players: {
      'Jeff_Adrien': {
        'number': 4,
        'shoe': 18,
        'points': 10,
        'rebounds': 1,
        'assists': 1,
        'steals': 2,
        'blocks': 7,
        'slam_dunks': 2,
      },
      'Bismak_Biyombo': {
        'number': 0,
        'shoe': 16,
        'points': 12,
        'rebounds': 4,
        'assists': 7,
        'steals': 7,
        'blocks': 15,
        'slam_dunks': 10,
      },
      'DeSagna_Diop': {
        'number': 2,
        'shoe': 14,
        'points': 24,
        'rebounds': 12,
        'assists': 12,
        'steals': 4,
        'blocks': 5,
        'slam_dunks': 5,
      },
      'Ben_Gordon': {
        'number': 8,
        'shoe': 15,
        'points': 33,
        'rebounds': 3,
        'assists': 2,
        'steals': 1,
        'blocks': 1,
        'slam_dunks': 0,
      },
      'Brendan_Haywood': {
        'number': 33,
        'shoe': 15,
        'points': 6,
        'rebounds': 12,
        'assists': 12,
        'steals': 22,
        'blocks': 5,
        'slam_dunks': 12,
      },
    },
  },
};
function getGameData(inputObject, currentPath = "", output = []) {
  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      const newKey = currentPath ? `${currentPath}.${key}` : key;
      if (typeof inputObject[key] === "object" && !Array.isArray(inputObject[key])) {
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
console.log(teamColors(gameObject,'Charlotte_Hornets'));
console.log(teamColors(gameObject,teamName))
console.log(teamColors(gameObject, 'Charlotte_Hornets'));
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
const playerStats = PlayerStats('Reggie_Evans', gameObject);
console.log(playerStats);
function bigShoeRebounds(gameObject) {
  let largestShoeSize = 0;
  let rebounds = 0;
  let playerName = '';

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
  let playerWithMostPoints = '';

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
  let playerWithLongestName = '';

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

