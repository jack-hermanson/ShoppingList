import {Container, Row, Col} from "reactstrap";
import AlertPanel, {AlertPanelProps} from "./components/AlertPanel/AlertPanel";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import React, {Component} from "react";
import {getAlerts} from "./api/alerts";

interface State {
    alerts: Array<AlertPanelProps> | null;
}

class App extends Component<any, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            alerts: null
        };
    }

    async componentDidMount() {
        await this.getAlerts();
    }

    render() {
        return (
            <Container className={"main-container pt-0"}>
                <Row>
                    <Col>
                        {this.state.alerts?.map(alert => (
                            <AlertPanel color={alert.color} text={alert.text} key={alert.text}/>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ShoppingList/>
                    </Col>
                </Row>
            </Container>
        );
    }

    async getAlerts() {
        const alerts = await getAlerts();
        this.setState({alerts});
    }
}

export default App;
