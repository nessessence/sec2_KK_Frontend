import React from 'react';
import { connect } from 'react-redux';
import {auth} from '../actions';
import { Col, Row, Table } from 'react-bootstrap';

class Log extends React.Component {
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
                    <tr>
                        <td width="30%" className="text-left">{this.timeConverter(timestamp)}</td>
                        <td width="70%" className="text-left">{desc}</td>
                    </tr>
                );
            }
        }

        return (
            <div className="app-content-inner">
                <div className="container">
                    <h1>History</h1>
                    <br />
                    <Table responsive striped hover>
                        <thead>
                            <tr>
                                <th width="30%">datetime</th>
                                <th width="70%">description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyComponents}
                        </tbody>
                    </Table>
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
    return {
        loadHistory: (amount) => {
          return dispatch(auth.loadHistory());
        },
      };
}

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(Log);