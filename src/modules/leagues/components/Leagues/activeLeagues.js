import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getActiveLeagues, areLeaguesLoaded, isLoaderVisible} from '../../../../state/league/selectors';
import Loader from '../../../../components/Loader';
import {Col, Row} from 'react-bootstrap';
import LeagueFixtures from '../../../fixtures/components/LeagueFixtures';
import LeagueTable from '../../../table/components/Table/leagueTable';
import Layout from '../../../../components/Layout';

const ActiveLeagues = ({areLeaguesLoaded, isLoaderVisible, leagues}) => {
  return(
      <Layout>
        { areLeaguesLoaded && !isLoaderVisible ?
          <Row className="allLeagues">
              <Col xs={12} md={12}>
              {
                leagues.map((category, index) => {
                  return(
                    <Col key={index}>
                        <div className="leagueName">
                            <Link to={'/leagues/' + category.sys.id}>{category.fields.name}</Link>
                        </div>
                        <LeagueTable leagueData={category.table}/>
                        <LeagueFixtures fixtures={category.fields.fixtures} confirmed={true}/>
                    </Col>
                  )
                })
              }
              </Col>
          </Row>
        : <Loader/>}
      </Layout>
  )
};

const mapStateToProps = (state) => {
    return {
        leagues: getActiveLeagues(state),
        isLoaderVisible: isLoaderVisible(state),
        areLeaguesLoaded: areLeaguesLoaded(state)
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveLeagues);
