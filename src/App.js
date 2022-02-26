/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import {Sketch01} from './sketches/sketch01';
import {Sketch02} from './sketches/sketch02';
import {Sketch03} from './sketches/sketch03';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {Sketch04} from './sketches/sketch04';
import {Sketch05} from './sketches/sketch05';
import {Sketch06} from './sketches/sketch06';
const App = () => {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        bg="light"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/generative-art/sketch01">
                                Sketch01
                            </Nav.Link>
                            <Nav.Link href="/generative-art/sketch02">
                                Sketch02
                            </Nav.Link>
                            <Nav.Link href="/generative-art/sketch03">
                                Sketch03
                            </Nav.Link>
                            <Nav.Link href="/generative-art/sketch04">
                                Sketch04
                            </Nav.Link>
                            <Nav.Link href="/generative-art/sketch05">
                                Sketch05
                            </Nav.Link>
                            <Nav.Link href="/generative-art/sketch06">
                                Sketch06
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="App">
                <Router>
                    <Switch>
                        <Route
                            exact={true}
                            path={[
                                '/generative-art/',
                                '/generative-art/sketch01',
                            ]}
                        >
                            <Sketch01 />
                        </Route>
                        <Route exact={true} path="/generative-art/sketch02">
                            <Sketch02 />
                        </Route>
                        <Route exact={true} path="/generative-art/sketch03">
                            <Sketch03 />
                        </Route>
                        <Route exact={true} path="/generative-art/sketch04">
                            <Sketch04 />
                        </Route>
                        <Route exact={true} path="/generative-art/sketch05">
                            <Sketch05 />
                        </Route>
                        <Route exact={true} path="/generative-art/sketch06">
                            <Sketch06 />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </>
    );
};

export default App;
