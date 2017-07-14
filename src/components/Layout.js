import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Layout = ({children}) => {
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
                        </Row>
                    </header>
                </Col>
            </Row>
            {children}
            <Row>
                <Col>
                    <footer></footer>
                </Col>
            </Row>
        </Grid>
    );
};

export default Layout;