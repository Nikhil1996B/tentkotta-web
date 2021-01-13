  
import React from "react";
import './Player.css';

class Player extends React.Component {
    _player = null;
    _el = React.createRef();

    componentDidMount() {
        const { source, onPlay } = this.props;
        if (this._el.current) {
            this._player = new window.THEOplayer.Player(this._el.current, {
                libraryLocation: "https://cdn.myth.theoplayer.com/7aff3fa6-f92e-45f9-a40e-1bce9911b073/"
            });
            this._player.source = source;
            this._player.addEventListener('play', onPlay)
        }
    }

    componentWillUnmount() {
      if (this._player) {
        this._player.destroy();
      }
    }

    render() {
        return ( 
        <div
            className = "theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer" 
            ref = { this._el }
            />
        );
    }
}

export default Player;
