import React from 'react'
import bg from '../img/home_hero.jpg';

class HomeHeader extends React.Component {
  render() {
    const { data } = this.props
    console.log('DATA: ', this.props.children)

    return (
      <div  className="cHomeHeader">
        <div className="cHomeHeader-bg" style={{backgroundImage:`url(${bg})`}}></div>
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


export default HomeHeader