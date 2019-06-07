import React from 'react'
import infographic from '../img/infographic.svg';

class HomeSlider extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div  className="cHomeHeader">
        <img src={infographic} alt="Global Mesh Labs" />
        <div className="cHomeHeader-inner">
          <div className="cHomeHeader-title"> 
            {this.props.children[0]}
          </div>
          <div className="cHomeHeader-subtitle"> 
            {this.props.children[1]}
          </div>
        </div>
      </div>
    )
  }
}


export default HomeSlider
