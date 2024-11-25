import React from 'react';
import { useEffect, useState } from 'react';

export default function ContactContent({ selectedTab, isTransitioning }) {
  const [animatedEmailText, setAnimatedEmailText] = useState([]);
  const [animatedPhoneText, setAnimatedPhoneText] = useState([]);
  const email = 'ziyeon.ivi@gmail.com';
  const phone = '010-7595-2995';
  useEffect(() => {
    setAnimatedEmailText(email.split(''));
    setAnimatedPhoneText(phone.split(''));
  }, [email, phone]);

  return (
    <div
      className={
        'info-tabs__content ' +
        (selectedTab === 'contact' && 'fade-in ') +
        (isTransitioning === true && 'fade-out')
      }
    >
      <h3 className="content__title">phone</h3>
      <div className="phone">
        {animatedPhoneText.map((char, index) => (
          <span
            key={index}
            className="email-char"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char}
          </span>
        ))}
      </div>

      <h3 className="content__title">email</h3>
      <div className="email">
        {animatedEmailText.map((char, index) => (
          <span
            key={index}
            className="email-char"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char}
          </span>
        ))}

        <button className="btn--send">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <a href="mailto:ziyeon.ivi@gmail.com" className="text">
            Send Me
          </a>
        </button>
      </div>
    </div>
  );
}
