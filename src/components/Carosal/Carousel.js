import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import leftChevron from './icons/leftChev.png';
import rightChev from './icons/rightArrow.png';
require('./carousal.scss')

// const carousalWidth = {
//   position: 'absolute',
//   width: '60%',
//   right: '0'
// }

class Carousel extends Component {
  state = {
    activeItemIndex: 1
  }

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });



  render() {
    const { title, style, children, displayCard = 5 } = this.props;
    const iconStyle = {
      width: '20px',
      height: '44px'
    };

    return (
      <div className="carousel-container">
        <div className="carousel-title" style={style && style.displayMode ? style.displayMode : {}}>
          {title}
          {style && <hr className="horzontal-fill" />}
        </div>
        <div className="carousel-content" >
          <ItemsCarousel
            // Placeholder configurations
            enablePlaceholder
            numberOfPlaceholderItems={5}
            minimumPlaceholderTime={1000}
            placeholderItem={<div style={{ height: 250, background: '#202020' }}></div>}

            // Carousel configurations
            numberOfCards={displayCard}
            gutter={12}
            showSlither={true}
            firstAndLastGutter={true}
            freeScrolling={true}

            // Active item configurations
            requestToChangeActive={this.changeActiveItem}
            activeItemIndex={this.state.activeItemIndex}
            activePosition={'center'}
            chevronWidth={24}
            rightChevron={<img src={leftChevron} style={{ ...iconStyle }} alt="right chevron" />}
            leftChevron={<img src={rightChev} style={{ ...iconStyle }} alt="left chevron" />}
            outsideChevron={false}
          >
            {children}
          </ItemsCarousel>
        </div>
      </div>
    );
  }
}

export { Carousel };
