import React from 'react';
import {ListGroup} from 'react-bootstrap';
import Fixture from '../Fixture';

const LeagueFixtures = ({fixtures, confirmed}) => {
 return (
     <ListGroup>
         {
             fixtures.length === 0 ? <span>{'No results'}</span> :
             fixtures.map((fixture, index) =>
                 !confirmed ?
                     <Fixture key={index} game={fixture}/> :
                     fixture.fields.confirmed && fixture.fields.confirmed === 'Yes' && <Fixture key={index} game={fixture}/>
             )
         }
     </ListGroup>
 );
};

export default LeagueFixtures;
