import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props){
        super(props);
    }

    profileIcon = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </a>
      ));

    

    render(){
        console.log(this.props.user);
        return (
            <div className="nav-button-group">
                <Dropdown>
                    <Dropdown.Toggle as={this.profileIcon} drop="left">
                        <div className='profile'>
                            <div className='profile-head'></div>
                            <div className='profile-body'></div>
                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Header>{this.props.user?.first_name+" "+this.props.user?.last_name}</Dropdown.Header>
                        <Dropdown.Divider />
                        <Link className="dropdown-item" to="/about">profile</Link>
                        <Link className="dropdown-item" to="/about">setting</Link>
                        <Link className="dropdown-item" to="/profile/change_password">change password</Link>
                    </Dropdown.Menu>
                </Dropdown>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('map state to profile\'s prop');
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps)(Profile);

