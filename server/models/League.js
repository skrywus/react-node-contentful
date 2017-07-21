
export const League = (options) => {
    let table = [];
    options.fields.players.forEach(player => {
        table.push( getPlayerPoints(player.sys.id, options.fields.fixtures, player.fields.name) );
    });
    const tableSorted = table.sort((a, b) => {
        return b.points-a.points;
    });
    const league = {
        ...options,
        table: tableSorted,
        progress: getLeagueProgress(table, options.fields.fixtures)
    };
  return league;
};

const getPlayerPoints = (playerId, fixtures, player) => {
    let stats = {
        playerId: playerId,
        playerName: player,
        points: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        played: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalsDiff: 0
    };

    fixtures.map((match) => {
        if(match.fields.homeScore !== undefined && match.fields.awayScore !== undefined) {
            if (match.fields.homePlayer.sys.id === playerId) {
                stats.goalsScored += match.fields.homeScore||0;
                stats.goalsConceded += match.fields.awayScore;
                if (match.fields.homeScore > match.fields.awayScore) {
                    stats.points += 3;
                    stats.wins += 1;
                } else if(match.fields.homeScore < match.fields.awayScore){
                    stats.losses += 1;
                }
            }
            if (match.fields.awayPlayer.sys.id === playerId) {
                stats.goalsScored += match.fields.awayScore||0;
                stats.goalsConceded += match.fields.homeScore;
                if (match.fields.homeScore > match.fields.awayScore) {
                    stats.losses += 1;
                } else if(match.fields.homeScore < match.fields.awayScore) {
                    stats.points += 3;
                    stats.wins += 1;
                }
            }
            if (match.fields.homePlayer.sys.id === playerId || match.fields.awayPlayer.sys.id === playerId) {
                stats.played += 1;
                stats.goalsDiff = stats.goalsScored - stats.goalsConceded;
                if (match.fields.homeScore === match.fields.awayScore) {
                    stats.points += 1;
                    stats.draws += 1;
                }
            }
        }
    });
    return stats;
};

const getLeagueProgress = (table, fixtures) => {
    let playedGames = 0;
    const allGames = fixtures.length||0;
    table.forEach(player => {
        playedGames += player.played;
    });

    const progress = allGames>0?(playedGames/allGames)*100:0;
    return progress;
};
