import React from 'react';
import {connect} from 'react-redux';
import {getActiveLeagues, areLeaguesLoaded, isLoaderVisible, getError} from '../../../../state/league/selectors';
import Loader from '../../../../components/Loader';
import {Col, Row} from 'react-bootstrap';
import LeagueFixtures from '../../../fixtures/components/LeagueFixtures';
import LeagueTable from '../../../table/components/Table/leagueTable';
import Layout from '../../../../components/Layout';
import moment from 'moment';

const ActiveLeagues = ({areLeaguesLoaded, isLoaderVisible, leagues, error}) => {
  return(
      <Layout>
        { areLeaguesLoaded && !isLoaderVisible ?
          <Row>
              <Col xs={12} md={12}>
              {
                leagues.map((league, index) => {
                  return(
                    <Col key={index} md={8} className="col-md-offset-2 league-wrapper">
                        <div className="leagueName text-left">
                            <a href={'#/leagues/' + league.sys.id}>{league.fields.name}</a>
                            <p>From: {moment(league.fields.dateStart).format('DD-MM-YYYY')} &nbsp;&nbsp;To: {moment(league.fields.dateEnd).format('DD-MM-YYYY')}</p>
                        </div>

                        <LeagueTable leagueData={league.table}/>
                        <LeagueFixtures fixtures={league.fields.fixtures} confirmed={true} limit={5}/>
                    </Col>
                  )
                })
              }
              </Col>
          </Row>
        : !error && <Loader/>}
      </Layout>
  )
};

const mapStateToProps = (state) => {
    return {
        leagues: getActiveLeagues(state),
        isLoaderVisible: isLoaderVisible(state),
        areLeaguesLoaded: areLeaguesLoaded(state),
        error: getError(state)
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveLeagues);
