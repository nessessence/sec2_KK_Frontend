import React from 'react';
import {court as courtAction} from '../actions';
import{connect} from 'react-redux';

class MyCourt extends React.Component {
    constructor(props){
        super(props);
    }

    async componentDidMount(){
        
    }

    render(){
        return (
           <div className="app-content-inner">
               <div className="container">
                    <h1>My Courts</h1>
               </div>
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
}
  
const mapDispatchToProps = dispatch => {
    return{};
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCourt);