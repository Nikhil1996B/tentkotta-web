import React, { Component } from 'react';
import searchicon from './assets/search-icon.png';
import search from './assets/search.svg'
require('./style.scss');


class Input extends Component {
  state = {
    query: '',
    containerWidth: '85%',
    // containerBorderColor: '#fff',
    inputFocus: true,
    inputOpacity: 1,
    cursor: 'default'
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeInputHandler();
      this.props.onCollapseInputHandler();
    }
  }

  openInputHandler = () => {
    this.setState({
      containerWidth: '85%',
      containerBorderColor: '#fff',
      inputFocus: true,
      inputOpacity: 1,
      cursor: 'default'
    });

    this.props.onExpandInputHandler();
  }

  // closeInputHandler = () => this.setState({
  //   containerWidth: '10%',
  //   containerBorderColor: 'transparent',
  //   inputFocus: false,
  //   inputOpacity: 0,
  //   cursor: 'pointer'
  // });

  resetQueryHandler = () => this.setState({ query: '' });

  onChangeHandler = event => this.setState({ query: event.target.value });

  onKeyPressHandler = event => {
    if (event.key === 'Enter' && this.state.query) {
      this.props.onEnterPressed(this.state.query)
    }
  };

  handleSearchIconClick = () => {
    if (this.state.query) {
      this.props.onEnterPressed(this.state.query);
    }
  }

  render() {
    return (
      <div className="navbar-input-space">
        <div
          className="navbar-input-container"
          style={{
            width: this.state.containerWidth,
            borderColor: this.state.containerBorderColor
          }}
        // ref={node => this.wrapperRef = node}
        >
          <div className="navbar-input">
            <img
              src={search}
              // src={this.props.searchIcon ? this.props.searchIcon : searchicon}
              aria-hidden="true"
              onClick={this.handleSearchIconClick}
              style={{ cursor: this.state.cursor }}
              alt="search content"
            ></img>
            <input
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.query}
              onKeyPress={this.onKeyPressHandler}
              onChange={this.onChangeHandler}
              style={{ opacity: this.state.inputOpacity }}
            // ref={input => input && window.requestAnimationFrame(() => input.focus())}
            />
            <div className="navbar-input-reset-query">
              <i
                className="fa fa-times"
                aria-hidden="true"
                onClick={this.resetQueryHandler}
                style={{
                  visibility: this.state.query.length && this.state.inputOpacity ? 'visible' : 'hidden',
                  cursor: 'pointer'
                }}
              ></i>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export { Input };
