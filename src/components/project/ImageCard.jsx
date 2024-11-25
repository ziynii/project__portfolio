import React from 'react';
import { CiSearch } from 'react-icons/ci';

export default function ImageCard({ onClickImageCard }) {
  return (
    <div className="project__design__content">
      {['1', '2', '3', '4', '5', '6', '7'].map(num => (
        <div
          key={num}
          className={`card card0${num}`}
          onClick={() => onClickImageCard(num)}
        >
          <span className="btn--go">
            <CiSearch />
          </span>
        </div>
      ))}
    </div>
  );
}
