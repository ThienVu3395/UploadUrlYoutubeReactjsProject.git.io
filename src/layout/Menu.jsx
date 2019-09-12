import React, { Component } from 'react';
import UserModal from '../components/UserModal';
import UserShareMovie from '../components/UserShareMovie';
import { connect } from 'react-redux';
import { Logout } from '../redux/Actions/MyMiniApp.action';

class Menu extends Component {
    check = () => {
        if (this.props.status === 1) {
            return (
                <>
                    <span className="btn btn-info mr-2">Welcome {localStorage.getItem('UserLogin')}</span>
                    <button className="btn btn-success mr-2" data-toggle="modal" data-target="#UserShareMovie">ShareMovie</button>
                    <button className="btn btn-danger" onClick={() => this.props.logout()}>LogOut</button>
                    <UserShareMovie />
                </>
            )
        }
        else if (this.props.status === "") {
            if (this.props.StorageStatus === 0) {
                return (
                    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal">Register/Login</button>
                )
            }
            else {
                return (
                    <>
                        <span className="btn btn-info mr-2">Welcome {localStorage.getItem('UserLogin')}</span>
                        <button className="btn btn-success mr-2" data-toggle="modal" data-target="#UserShareMovie">ShareMovie</button>
                        <button className="btn btn-danger" onClick={() => this.props.logout()}>LogOut</button>
                        <UserShareMovie />
                    </>
                )
            }
        }
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
                    {/* Brand/logo */}
                    <div className="navbar-brand">
                        <img src="https://www.tivertonprimary.co.uk/wp-content/uploads/2016/01/viral-real-estate-video.png" alt="logo" style={{ width: 70 }} />
                    </div>
                    {/* Links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {this.check()}
                        </li>
                    </ul>
                    <UserModal />
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.storeMiniAppReducer.LoginStatus,
        StorageStatus : state.storeMiniAppReducer.StorageStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            let confirm = window.confirm("Are You Sure To LogOut ?");
            if (confirm) {
                dispatch(Logout())
            }
            return;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)