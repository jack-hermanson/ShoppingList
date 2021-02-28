import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            getMessage: {}
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/flask/hello').then(response => {
            console.log('success');
            console.log(response);
            this.setState({'getMessage': response});
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="App">
                <p>Test</p>
                <p>{this.state.getMessage.data?.message || "LOADING"}</p>
            </div>
        );
    }
}

export default App;
