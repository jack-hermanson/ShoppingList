import React from 'react';
import axios from "axios";

class App extends React.Component<any, any> {

    render() {
        return (
            <>
                <p>Test</p>
            </>
        );
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
