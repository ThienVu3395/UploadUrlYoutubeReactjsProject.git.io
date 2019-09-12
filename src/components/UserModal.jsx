import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Register,Login} from '../redux/Actions/MyMiniApp.action';

class UserModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            Email : "",
            Password : ""
        }
    }

    getInputValue = (event) =>{
        const input = event.target;
        this.setState({
            [input.name] : input.value
        })
    }
    render() {
        return (
            <>
                {/* The Modal */}
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                {/* Nav tabs */}
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#home">Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#menu1">Login</a>
                                    </li>
                                </ul>
                                {/* Tab panes */}
                                <div className="tab-content mt-3">
                                    {/* Form Đăng Ký */}
                                    <div className="tab-pane container active" id="home">
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" name="Email" className="form-control" placeholder="type your email" onChange={this.getInputValue}/>
                                            <div className="valid-feedback">Valid.</div>
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="pwd">Password</label>
                                            <input type="password" name="Password" className="form-control" placeholder="type your password" onChange={this.getInputValue}/>
                                        </div>
                                        <button className="btn btn-success" onClick={()=>this.props.register(this.state)}>Register</button>
                                    </div>

                                    {/* Close Form Đăng Ký */}

                                    {/* Form Đăng Nhập */}
                                    <div className="tab-pane container fade" id="menu1">
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" name="Email" className="form-control" placeholder="type your email" onChange={this.getInputValue}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="pwd">Password</label>
                                            <input type="password" name="Password" className="form-control" placeholder="type your password" onChange={this.getInputValue}/>
                                        </div>
                                        <button type="submit" className="btn btn-success" onClick={()=>this.props.login(this.state)}>Login</button>
                                    </div>
                                    {/* Close Form Đăng Nhập */}
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal" id="close">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register : (objRegister) => {
            if(objRegister.Email !== "" && objRegister.Email !==""){
                dispatch(Register(objRegister))
            }
            else {
                alert("Email and Password Must Filled");
                return
            }
        },

        login : (objLogin) => {
            if(objLogin.Email !== "" && objLogin.Email !==""){
                dispatch(Login(objLogin))
            }
            else {
                alert("Email and Password Must Filled");
                return
            }
        }
    }
}

export default connect(null,mapDispatchToProps)(UserModal)
