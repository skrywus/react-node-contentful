import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Col, Row, FormGroup, FormControl} from 'react-bootstrap';
import {isLeagueLoaded, isLeagueLoaderVisible, getLeagueDetails} from '../../../../state/league/selectors';
import Loader from '../../../../components/Loader';
import LeagueTable from '../../../table/components/Table/leagueTable';
import LeagueFixtures from '../../../fixtures/components/LeagueFixtures';
import {setFixturesFilterRequest} from '../../../../state/league/actions';
import Layout from '../../../../components/Layout';

class LeagueDetails extends React.Component {

    componentWillMount() {
        const {setFixturesFilterRequest} = this.props;
        setFixturesFilterRequest('');
    }

    searchFixtures(props, event) {
        const {setFixturesFilterRequest} = props;
        setFixturesFilterRequest(event.target.value)
    };

    render() {
        const {isLoaderVisible, isLeagueLoaded, league, fixtures, filter} = this.props;
        return (
            <Layout>
                { isLeagueLoaded && !isLoaderVisible ?
                    <Row>
                        <Col xs={12} md={12}>
                            <Link to={'/'} className='back'>&#x2190; {'Back to Leagues'}</Link>
                            <h4>{league.fields.name}</h4>
                            <LeagueTable leagueData={league.table}/>
                            <FormGroup className="pull-right">
                                <FormControl className="search" bsSize="small" type="text" placeholder="Enter player name" name="search" value={filter} onChange={(event) => this.searchFixtures(this.props, event)}/>
                            </FormGroup>
                            <LeagueFixtures fixtures={fixtures} confirmed={false}/>
                        </Col>
                    </Row>
                    : <Loader/>}
            </Layout>
        )
    }
};

const filterFixtures = (league, filter, isLoaded) => {

    if(isLoaded) {
        filter = filter.toLowerCase().trim();
        return league.fields.fixtures.filter(fixture => {
            const homePlayer = fixture.fields.homePlayer.fields.name.toLowerCase();
            const awayPlayer = fixture.fields.awayPlayer.fields.name.toLowerCase();

            return homePlayer.indexOf(filter) !== -1 || awayPlayer.indexOf(filter) !== -1;
        });
    }
    return league;
};

const mapStateToProps = (state) => {
    const filter = state.leagues.fixtures ?  state.leagues.fixtures.filter : '';
    const isLoaded = isLeagueLoaded(state);
    const league = getLeagueDetails(state);
    const fixtures = filterFixtures(league, filter, isLoaded);
    return {
        isLoaderVisible: isLeagueLoaderVisible(state),
        isLeagueLoaded: isLoaded,
        league,
        fixtures,
        filter
    };
};

const mapDispatchToProps = {
    setFixturesFilterRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(LeagueDetails);
