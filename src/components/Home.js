import React from 'react';
import Logo from '../logo.svg';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <br />
                <br />
                <h1>Home</h1>
                <img src={Logo} />
            </div>
        );
    }

}

export default Home;