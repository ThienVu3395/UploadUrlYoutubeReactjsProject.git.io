import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShareMovie } from '../redux/Actions/MyMiniApp.action';

class UserShareMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Link: "",
        }
    }
    getInputValue = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }

    render() {
        return (
            <>
                {/* The Modal */}
                <div className="modal fade" id="UserShareMovie">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Share a Youtube Movie</h4>
                            </div>

                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Youtube URL</label>
                                    <input type="text" className="form-control" name="Link" onChange={this.getInputValue} required />
                                </div>
                                <button className="btn btn-primary container" onClick={() => this.props.share(this.state)}>Share</button>
                            </div>

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
        share: (objShare) => {
            if (objShare.Link !== "") {
                dispatch(ShareMovie(objShare))
            }
            else {
                alert("Email and Password Must Filled");
                return
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(UserShareMovie)
