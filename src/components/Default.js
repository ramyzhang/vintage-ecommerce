import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-title text-center text-uppercase py-5">
            <h1 className="display-3">404</h1>
            <h1>error: page not found</h1>
            <h3>the requested URL <span className="text-danger">{this.props.location.pathname}</span>{" "} was not found
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
