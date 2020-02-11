import React from 'react';
import { connect } from 'react-redux';
import {auth} from '../actions';
import { Col, Row } from 'react-bootstrap';

class History extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: null
        }
    }

    async componentDidMount(){
        let history = await this.props.loadHistory();
        this.setState({
            history: history
        })
    }

    timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }

    render(){
        let historyComponents =  [];

        if ( this.state.history ){
            let history = this.state.history;
            
            for(let i=history.length-1; i>=0; --i){
                let timestamp = history[i].timestamp;
                let desc = history[i].desc;
                historyComponents.push(
                    <Row>
                        <Col sm='5'>
                            <p className="text-left">{this.timeConverter(timestamp)}</p>
                        </Col>
                        <Col sm='7'>
                            <p className="text-left">{desc}</p>
                        </Col>
                    </Row>
                );
            }
        }

        return (
            <div className="container">
                <h1>History</h1>
                <br />
                {historyComponents}
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
    return {
        loadHistory: (amount) => {
          return dispatch(auth.loadHistory());
        },
      };
}

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(History);