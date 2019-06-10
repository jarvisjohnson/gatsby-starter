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
  componentDidMount() {
    this.autoSlide = setInterval(() => {
      this.changeSlide()
    }, 4500)
  }
  changeSlide(index = null) {
    if (!this.props.slides || !this.props.slides.length) {
      return
    }
    const next = this.state.activeSlide >= this.props.slides.length - 1 ? 0 : this.state.activeSlide + 1
    const newIndex = index === null ? next : index
    clearTimeout(this.state.transition)
    const timeout = setTimeout(() => {
      this.setState({
        activeSlide: newIndex,
        transition: null
      })
    }, 300)
    this.setState({
      transition: timeout
    })
    if (index !== null) {
      clearInterval(this.autoSlide)
    }
    
  }
  render() {
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
            {this.props.slides && this.props.slides.length ? (
              <div className={`cHomeSlider-slider${this.state.transition  !== null ? ' in-transition' : ''}`}>
                <div className="cHomeSlider-slide">
                  <h4 className="cHomeSlider-slideTitle">{ this.props.slides[this.state.activeSlide].title }</h4>
                  <div className="cHomeSlider-slideText">{ this.props.slides[this.state.activeSlide].text }</div>
                </div>
                <div className="cHomeSlider-timeline">
                  {this.props.slides.map((slide, idx) => {
                    return (<button className={idx === this.state.activeSlide ? 'active' : null} onClick={this.changeSlide.bind(this, idx)}>Go to slide #{idx + 1 }</button>)
                  })}
                </div>
              </div>
            ) : null }
            <div className="cHomeSlider-buttons">
              <a className="cHomeSlider-btn" target="_blank" href="/files/Lot49%20Protocol%20Whitepaper%20-%20DRAFT%200.8.5.pdf"><span>Download Whitepaper</span></a>
              <a rel="noopener noreferrer" className="cHomeSlider-btn" target="_blank" href="https://global-mesh-labs.gitbook.io/lot49/"><span>View gitbook</span></a>
            </div>
          </div>
        <img src={infographic} alt="Global Mesh Labs" />
        </div>
      </div>
    )
  }
}


export default HomeSlider
