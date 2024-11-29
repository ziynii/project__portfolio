import React from 'react';
import { useEffect, useState } from 'react';
import AboutContent from './AboutContent';
import ContactContent from './ContactContent';

export default function InfoSection() {
  const [selectedTab, setSelectedTab] = useState('about');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const text =
    '정확한 구현과 세심한 접근으로\n더 나은 사용자 경험을 제공하겠습니다.';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const speed = 60;

  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsTypingDone(true);
    }
  }, [index]);

  const handleTabClick = tab => {
    if (tab !== selectedTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedTab(tab);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="profile__content__info-section">
      <p className="intro__title">
        {displayedText.split('더 나은 사용자 경험').map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && (
              <span
                className={`highlight ${
                  isTypingDone ? 'highlight-active' : ''
                }`}
              >
                더 나은 사용자 경험
              </span>
            )}
          </React.Fragment>
        ))}
      </p>
      <div className="intro__description">
        웹 기술을 탐구하는 즐거움 속에서 HTML, CSS, JavaScript를 활용해 다양한
        작업을 하고 있습니다. <br />
        React와 Vue 같은 프레임워크 환경에서 컴포넌트 단위로 작업이 가능하며,{' '}
        <br />
        새로운 라이브러리를 습득해 프로젝트에 다양한 기술을 적용하기 위해
        노력합니다. <br />
        사용자의 니즈를 충족시키는 웹사이트를 제작하기 위해 끊임없이 배우고
        발전하는 웹 퍼블리셔가 되겠습니다.
      </div>
      <div className="info-tabs">
        <div className="info-tabs__btns">
          <button
            className={
              'info-tabs__btn ' + (selectedTab === 'about' && 'active')
            }
            onClick={() => handleTabClick('about')}
          >
            About
          </button>
          <button
            className={
              'info-tabs__btn ' + (selectedTab === 'contact' && 'active')
            }
            onClick={() => setSelectedTab('contact')}
          >
            Contact
          </button>
        </div>
        <AboutContent
          selectedTab={selectedTab}
          isTransitioning={isTransitioning}
        />
        <ContactContent
          selectedTab={selectedTab}
          isTransitioning={isTransitioning}
        />
      </div>
    </div>
  );
}
