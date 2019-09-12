import React, { Component } from 'react'

export default class ItemMovie extends Component {
    render() {
        let { Title, Description, Link, Like, Dislike , Author } = this.props.item;
        return (
            <div className="col-lg-4 mb-3">
                <iframe width="100%" height="250" src={Link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="ok" allowFullScreen></iframe>
                <div className="card-body card text-center">
                    <h4 className="card-title">{Title}</h4>
                    <p className="card-text">Share by : {Author}</p>
                    <p className="card-text">{Description}</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="btn btn-success">Like : {Like}</span>
                            </div>

                            <div className="col-lg-6">
                                <span className="btn btn-danger">Dislike : {Dislike}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
