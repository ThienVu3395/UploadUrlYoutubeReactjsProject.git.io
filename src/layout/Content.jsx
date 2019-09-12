import React, { Component } from 'react';
import ItemMovie from './ItemMovie';
import {connect} from 'react-redux'

class Content extends Component {
    renderPhim = () => {
        let content = this.props.listMovie.map((item, key) => {
            return (
                <ItemMovie item={item} key={key}/>
            )
        })
        return content
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center text-danger">List Movie</h1>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listMovie : state.storeMiniAppReducer.listMovie
    }
}

export default connect(mapStateToProps,null)(Content)
