import React from 'react'
import infographic from '../img/infographic.svg';

class HomeSlider extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      activeSlide:0,
      transition: null
    }
  }
  changeSlide(index = null) {
    const next = this.state.activeSlide >= this.props.slides.length - 1 ? 0 : this.state.activeSlide + 1
    const newIndex = index === null ? next : index
    clearTimeout(this.state.transition)
    const timeout = setTimeout(() => {
      this.setState({
        activeSlide: next,
        transition: null
      })
    })
    this.setState({
      transition: timeout
    })
    
  }
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
            <div className={`cHomeSlider-slider${this.state.transition && ' in-transition'}`}>
              <div className="cHomeSlider-slide">
                <h4 className="cHomeSlider-slideTitle">{ this.props.slides[this.state.activeSlide].title }</h4>
                <div className="cHomeSlider-slideText">{ this.props.slides[this.state.activeSlide].text }</div>
              </div>
              <div className="cHomeSlider-timeline">
                {this.props.slides.map((slide, idx) => {
                  return (<a onClick={this.changeSlide.bind(this, idx)}>Go to slide #{idx + 1 }</a>)
                })}
              </div>
            </div>
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
