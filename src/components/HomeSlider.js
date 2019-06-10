import React from 'react'
import infographic from '../img/infographic.svg';

class HomeSlider extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div  className="cHomeSlider">
        <div className="cHomeSlider-inner">
          <div className="cHomeSlider-text">
            <h2 className="cHomeSlider-title">
              {this.props.title}
            </h2>
            <div className="cHomeSlider-subtitle">
              {this.props.children}
            </div>
            <div>SLIDER GOES HERE</div>
            <div className="cHomeSlider-buttons">
              <a className="cHomeSlider-btn" target="_blank" href="https://global-mesh-labs.gitbook.io/lot49/">Download Whitepaper</a>
              <a className="cHomeSlider-btn" target="_blank" href="https://github.com/global-mesh-labs">View gitbook</a>
            </div>
          </div>
        <img src={infographic} alt="Global Mesh Labs" />
        </div>
      </div>
    )
  }
}


export default HomeSlider
