import React from 'react'
import infographic from '../img/infographic.svg';

class HomeSlider extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div  className="cHomeSlider">
        <div className="cHomeSlider-inner">
          <div className="cHomeSlider-text">
            <div className="cHomeSlider-title">
              {this.props.children[0]}
            </div>
            <div className="cHomeSlider-subtitle">
              {this.props.children[1]}
            </div>
            <div>SLIDER GOES HERE</div>
            <div className="cHomeSlider-buttons">
              <a className="cHomeSlider-btn" href="https://app.gitbook.com/@global-mesh-labs/s/lot49/">Download Whitepaper</a>
              <a className="cHomeSlider-btn" href="https://app.gitbook.com/@global-mesh-labs/s/lot49/">View gitbook</a>
            </div>
          </div>
        <img src={infographic} alt="Global Mesh Labs" />
        </div>
      </div>
    )
  }
}


export default HomeSlider
