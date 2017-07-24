import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {getError} from './../state/league/selectors';

const Layout = ({children, error}) => {
    return (
        <Grid fluid={true}>
            <Row>
                <Col>
                    <header>
                        <Row>
                            <Col md={3} xs={3} className="title">
                                <span>MakingWaves</span>
                                <span>FIFA League</span>
                            </Col>
                            <Col md={1} xs={3} className="triangle"></Col>
                            <Col md={1} xs={3} className="menu-nav pull-right text-right">
                                <a href={'#/archive'}>Archive</a>
                            </Col>
                            <Col md={1} xs={3} className="menu-nav pull-right text-right">
                                <a href={'#'}>Start</a>
                            </Col>
                        </Row>
                    </header>
                </Col>
            </Row>
            {error ?
                <Row>
                    <Col>
                        <div className="alert alert-warning"><strong>Error!</strong> Something went wrong. Please try again later or contact with administrator.</div>
                    </Col>
                </Row> :
                '' }
            {children}
            <Row>
                <Col>
                    <footer></footer>
                </Col>
            </Row>
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        error: getError(state)
    };
};


export default connect(mapStateToProps, null)(Layout);