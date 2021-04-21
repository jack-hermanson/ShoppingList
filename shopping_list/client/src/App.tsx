import {Container, Row, Col} from "reactstrap";
import {ShoppingList} from "./components/ShoppingList/ShoppingList";
import React from "react";
import {StoreProvider} from "easy-peasy";
import {store} from "./store";
import {Alerts} from "./components/Alerts/Alerts";

const App = () => {

    return (
        <StoreProvider store={store}>
            <Container className={"main-container pt-0"}>
                <Row>
                    <Col>
                        <Alerts />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ShoppingList/>
                    </Col>
                </Row>
            </Container>
        </StoreProvider>
    );
}

export default App;
