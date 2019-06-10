import React from 'react'
import bg from '../img/home_hero.jpg';

class HomeHeader extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div  className="cHomeHeader">
        <div className="cHomeHeader-bg" style={{backgroundImage:`url(${bg})`}}></div>
        <div className="cHomeHeader-inner">
          <h1 className="cHomeHeader-title"> 
            {this.props.title}
          </h1>
          <div className="cHomeHeader-subtitle"> 
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}


export default HomeHeader