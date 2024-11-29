import React, {Component} from 'react';
import Navbar from "./navbar";
import Greet from "./greet";
import TypeWriterC from "./typewriter";
import Cards from "./cards";


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                
                <Greet/>
                
                <Cards/>
                
            </React.Fragment>
        );
    }
}

export default Home;