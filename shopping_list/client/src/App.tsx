import axios from "axios";
import {Container, Row, Col} from "reactstrap";
import AlertPanel, {AlertPanelProps} from "./components/AlertPanel/AlertPanel";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import React, {Component, Fragment} from "react";

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
        const response = await axios.get("/api/alerts/");
        this.setState({alerts: response.data});
    }

    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         response: null
    //     };
    // }

    // componentDidMount() {
    //     axios.get('/api/items/').then(response => {
    //         console.log('success');
    //         console.log(response);
    //         this.setState({response: response});
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }
    //
    // render() {
    //     return (
    //         <div className="App">
    //             <p>Test</p>
    //             <p>{this.state.response?.data?.test || "LOADING"}</p>
    //         </div>
    //     );
    // }
}

export default App;
