import React from 'react';
import {connect} from 'react-redux';
import {Col, FormGroup, FormControl} from 'react-bootstrap';
import {addScoreRequest} from '../../../../state/league/actions';

class Fixture extends React.Component {

    constructor() {
        super();
        this.state = {
            addScore: false,
            scoreSaving: false,
            scoreSaved: false
        };
    }

    resetState() {
        this.setState({ addScore: false, scoreSaving: false, scoreSaved: false });
    }

    addScore() {
        this.setState({ addScore: true });
    }

    addScoreCancel() {
        this.setState({ addScore: false });
    }

    addScoreSubmit(event) {
        const {game, addScoreRequest} = this.props;
        this.setState({ scoreSaving: true });
        addScoreRequest({
            fixtureId: game.sys.id,
            homeScore: event.target.homeScore.value,
            awayScore: event.target.awayScore.value,
            confirmed: true
        });
        event.preventDefault();
    }

    render() {
        const {game} = this.props;
        const addScoreVisible = this.state.addScore;
        const {scoreSaving, scoreSaved} = this.state;
        return (
            <Col xs={12} md={12} className="text-center fixture">
                <Col xs={4} md={5} className="text-right"><span>{game.fields.homePlayer.fields.name}</span></Col>
                {game.fields.homeScore && game.fields.awayScore ?
                    <Col xs={4} md={2} lg={2} className="text-center result">
                        <span>{game.fields.homeScore} : {game.fields.awayScore}</span>
                    </Col> :
                    <Col xs={4} md={2} lg={2} className="text-center addScore">
                        {addScoreVisible && !scoreSaving && !scoreSaved &&
                        <Col>
                            <form onSubmit={this.addScoreSubmit.bind(this)}>
                                <FormGroup className="addScoreForm col-lg-4">
                                    <FormControl className="scoreInput" bsSize="small" type="number" placeholder="0" min="0" max="99" name="homeScore"/>
                                </FormGroup>
                                <FormGroup className="addScoreForm col-lg-4">
                                    :
                                </FormGroup>
                                <FormGroup className="addScoreForm col-lg-4">
                                    <FormControl className="scoreInput" bsSize="small" type="number" placeholder="0" min="0" max="99" name="awayScore"/>
                                </FormGroup>
                                <FormGroup className="addScoreFormButton col-lg-6">
                                    <FormControl className="scoreInput" bsSize="small" type="submit" value="save" placeholder="0" name="save"/>
                                </FormGroup>
                                <FormGroup className="addScoreFormButtonCancel col-lg-6">
                                    <FormControl className="scoreInput" bsSize="small" type="button" value="cancel" placeholder="0" name="cancel"
                                    onClick={this.addScoreCancel.bind(this)}/>
                                </FormGroup>
                            </form>
                        </Col>}
                        {addScoreVisible && scoreSaving && !scoreSaved && "saving..."}
                        {!addScoreVisible && <span onClick={this.addScore.bind(this)}>Add score</span>}
                    </Col>}
                <Col xs={4} md={5} className="text-left"><span>{game.fields.awayPlayer.fields.name}</span></Col>
            </Col>
        );
    }
};
const mapDispatchToProps = {
    addScoreRequest
};
export default connect(null, mapDispatchToProps)(Fixture);