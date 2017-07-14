import React from 'react';
import {Col} from 'react-bootstrap';

const Fixture = ({game}) => {
    return(
        <Col xs={12} md={12} className="text-center fixture">
            <Col xs={4} md={5} className="text-right"><span>{game.fields.homePlayer.fields.name}</span></Col>
            {game.fields.homeScore && game.fields.awayScore ?
                <Col xs={4} md={2} lg={2} className="text-center result">
                    <span>{game.fields.homeScore} : {game.fields.awayScore}</span>
                </Col> :
                <Col xs={4} md={2} lg={2} className="text-center addScore">
                    <span>Add score</span>
                </Col>}
            <Col xs={4} md={5} className="text-left"><span>{game.fields.awayPlayer.fields.name}</span></Col>
        </Col>
    );
};

export default Fixture;