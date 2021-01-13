import React from 'react';
import IconCross from '../../icons/Icons/close.svg';

require('./Content.scss')

const Content = ({ movie, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'backgroundImage': `url(${movie.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        {movie.image && <div className="img"><img src={`${movie.image}`} alt={`content image ${movie.img}`} /></div>}
        <div className="content__title">{movie.title}</div>
        <div className="content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
          eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
          quis quam congue, non fringilla orci placerat. Praesent sollicitudin
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        {<img src={IconCross} alt="Icon cross"/>}
        {/* <IconCross /> */}
      </button>
    </div>
  </div >
);

export default Content;
