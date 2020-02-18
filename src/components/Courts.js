import React from 'react';
import {connect} from 'react-redux';
import {court as courtActions} from '../actions';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Courts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courts: null
        }
    }

    async componentDidMount(){
        // try{
        //     let courts = await this.props.loadCourts();
        //     this.setState({
        //         courts: courts
        //     })
        // }
        // catch(err){
        //     alert(err)
        // }
        
    }

    render(){

        return (
            <div className="app-content-inner">
                <div className="container">
                    <h1>Courts</h1>
                </div>
            </div>
        );

        // let courts = this.state.courts;
        // let components = [];
        // for(let index in courts){
        //     let court = courts[index];
        //     components.push(
        //         <div className="mb-2">
        //             <NavLink to={"/booking/"+court.name+"/"}>{JSON.stringify(court)}</NavLink>
        //         </div>
        //     );
        // }

        // return (
        //     <div className="container">
        //         <h1>Courts</h1>
        //         {components}
        //     </div>
        // );
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        loadCourts: () => {
          return dispatch(courtActions.loadCourts());
        },
      };
}

export default connect(null, mapDispatchToProps)(Courts);