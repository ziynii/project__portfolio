import React from 'react';
import { IoMail, IoCall } from 'react-icons/io5';

export default function ImageSection() {
  return (
    <div className="profile__content__image-section sm-hidden">
      <div className="image-section__img"></div>
      <div className="image-section__contact">
        <h4 className="contact__title">
          info
          <span className="line"></span>
        </h4>
        <ul className="contact__list">
          <li className="contact__item">홍지연</li>
          <li className="contact__item">
            <IoMail></IoMail>ziyeon.ivi@gmail.com
          </li>
          <li className="contact__item">
            <IoCall></IoCall>010-7595-2995
          </li>
        </ul>
      </div>
    </div>
  );
}
