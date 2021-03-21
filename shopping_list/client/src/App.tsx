import {Container, Row, Col} from "reactstrap";
import {ShoppingList} from "./components/ShoppingList/ShoppingList";
import React from "react";
import {StoreProvider} from "easy-peasy";
import {store} from "./store";

const App = () => {

    return (
        <StoreProvider store={store}>
            <Container className={"main-container pt-0"}>
                <Row>
                    <Col>
                        {/*{alerts.map(alert => (*/}
                        {/*    <AlertPanel color={alert.color} text={alert.text} key={alert.text}/>*/}
                        {/*))}*/}
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
