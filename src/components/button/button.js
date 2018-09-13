import React, { Component } from 'react'
import './button.scss'

class Button extends Component {
  render() {
    return (
      <React.Fragment>        
        <div className="container">
          <h1>BUTTON STYLE</h1>
          <div className="buttons">
            <a className="btn btn-1">
              <svg>
                <rect width="100%" height="100%" x="0" y="0" />
              </svg>
              Hover
            </a>
            <a className="btn btn-2">
              Hover
            </a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Button