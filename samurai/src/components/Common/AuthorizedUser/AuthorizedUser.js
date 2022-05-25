import React from "react";
import RoundedAvatar from "../RoundedAvatar/RoundedAvatar";
import './AuthorizedUser.css'

class AuthorizedUser extends React.Component{
    state = {
        dropDown: false,
    }

    toggleDropDown = () => {
        this.setState({
            dropDown: !this.state.dropDown
        })
    }
    render(){
        return (
            <div className="auth flex-center-center">
                <div  onClick={ this.toggleDropDown } className='flex-center-center'><RoundedAvatar/><div className='triangle down'/></div>
                {
                    this.state.dropDown &&
                    <div className="dropdown">
                        <p>Id: {this.props.id}</p>
                        <p>Login: {this.props.login}</p>
                        <p>Email: {this.props.email}</p>
                        <a className='logout' onClick={this.props.logout}>Logout</a>
                    </div>
                }
            </div>
        )
    }

}


export default AuthorizedUser;