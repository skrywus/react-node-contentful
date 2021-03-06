import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Col, Row, FormGroup, FormControl} from 'react-bootstrap';
import {isLeagueLoaded, isLeagueLoaderVisible, getLeagueDetails, isAddScoreLoaded, getError} from '../../../../state/league/selectors';
import Loader from '../../../../components/Loader';
import LeagueTable from '../../../table/components/Table/leagueTable';
import LeagueFixtures from '../../../fixtures/components/LeagueFixtures';
import {setFixturesFilterRequest} from '../../../../state/league/actions';
import Layout from '../../../../components/Layout';
import moment from 'moment';
import LeagueProgressChart from './leagueProgressChart';
import filterFixtures from './../../../../selectors/filterFixtures';

class ArchiveLeagueDetails extends React.Component {

    componentWillMount() {
        const {setFixturesFilterRequest} = this.props;
        setFixturesFilterRequest('');
    }

    searchFixtures(props, event) {
        const {setFixturesFilterRequest} = props;
        setFixturesFilterRequest(event.target.value)
    };

    render() {
        const {isLoaderVisible, isLeagueLoaded, league, fixtures, filter, isAddScoreLoaded, error} = this.props;
        return (
            <Layout>
                { isLeagueLoaded && !isLoaderVisible ?
                    <Row>
                        <Col xs={12}  md={8} className="col-md-offset-2">
                            <Link to={'/archive'} className='back'>&#x2190; {'Back to Archive'}</Link>
                            <div className="leagueName text-left">
                                <h4>{league.fields.name}</h4>
                                <p>From: {moment(league.fields.dateStart).format('DD-MM-YYYY')} &nbsp;&nbsp;To: {moment(league.fields.dateEnd).format('DD-MM-YYYY')}</p>
                            </div>
                            <LeagueProgressChart progress={league.progress}/>
                            <LeagueTable leagueData={league.table}/>
                            { isAddScoreLoaded &&
                                <div className="alert alert-success"><strong>Saved!</strong> Your result has been saved.</div>
                            }
                            <FormGroup className="pull-right">
                                <FormControl className="search" bsSize="small" type="text" placeholder="Enter player name" name="search" value={filter}
                                             onChange={(event) => this.searchFixtures(this.props, event)}/>
                            </FormGroup>
                            <LeagueFixtures fixtures={fixtures} confirmed={true}/>
                        </Col>
                    </Row>
                    : !error && <Loader/>}
            </Layout>
        )
    }
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
        filter,
        isAddScoreLoaded: isAddScoreLoaded(state),
        error: getError(state)
    };
};

const mapDispatchToProps = {
    setFixturesFilterRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveLeagueDetails);
