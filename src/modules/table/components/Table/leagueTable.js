import React from 'react';
import { Table } from 'react-bootstrap';

const LeagueTable = ({leagueData}) => {
    return (
        <div>
            <Table striped bordered condensed hover responsive>
                <thead>
                <tr>
                    <th>Position</th>
                    <th>Player</th>
                    <th>Played</th>
                    <th>Wins</th>
                    <th>Draws</th>
                    <th>Losses</th>
                    <th>GS</th>
                    <th>GC</th>
                    <th>Diff</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {
                    leagueData.map((player, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{player.playerName}</td>
                                <td>{player.played}</td>
                                <td>{player.wins}</td>
                                <td>{player.draws}</td>
                                <td>{player.losses}</td>
                                <td>{player.goalsScored}</td>
                                <td>{player.goalsConceded}</td>
                                <td>{player.goalsDiff}</td>
                                <td><strong>{player.points}</strong></td>
                            </tr>
                        )
                    })

                }
                </tbody>
            </Table>
        </div>
    )
};

export default LeagueTable;