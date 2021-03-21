import {Container, Row, Col} from "reactstrap";
import AlertPanel from "./components/AlertPanel/AlertPanel";
import {ShoppingList} from "./components/ShoppingList/ShoppingList";
import React, {Component} from "react";
import {getAlerts} from "./api/alerts";


const App = () => {

    return (
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
                    <ShoppingList />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
