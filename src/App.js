import "./App.css";
import { Sketch01 } from "./sketches/sketch01";
import { Sketch02 } from "./sketches/sketch02";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
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
                                "/generative-art/",
                                "/generative-art/sketch01",
                            ]}
                        >
                            <Sketch01 />
                        </Route>
                        <Route exact={true} path="/generative-art/sketch02">
                            <Sketch02 />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </>
    );
};

export default App;
