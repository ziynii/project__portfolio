import React from 'react';

export default function AboutContent({ selectedTab, isTransitioning }) {
  return (
    <div
      className={
        'info-tabs__content ' +
        (selectedTab === 'about' && 'fade-in ') +
        (isTransitioning === true && 'fade-out')
      }
    >
      <h3 className="content__title">Information</h3>
      <dl className="info">
        <div className="info__item">
          <dt className="info__term">이름</dt>
          <dd className="info__description">홍지연</dd>
        </div>
        <div className="info__item">
          <dt className="info__term">생년월일</dt>
          <dd className="info__description">1998.06.23</dd>
        </div>
        <div className="info__item">
          <dt className="info__term">주소</dt>
          <dd className="info__description">서울특별시 양천구 신정동</dd>
        </div>
      </dl>

      <h3 className="content__title">Skill</h3>

      <dl className="info skill">
        <div className="info__item">
          <dt className="info__term">Language</dt>
          <dd className="info__description">HTML CSS JavaScript TypeScript</dd>
        </div>
        <div className="info__item">
          <dt className="info__term">Style</dt>
          <dd className="info__description">
            SCSS Styled-Component Tailwind BootStrap
          </dd>
        </div>
        <div className="info__item">
          <dt className="info__term">Framwork & Library</dt>
          <dd className="info__description">React Vue Gatsby</dd>
        </div>
        <div className="info__item">
          <dt className="info__term">Tool</dt>
          <dd className="info__description">
            Git Photoshop Illustrator Figma{' '}
          </dd>
        </div>
        <div className="info__item">
          <dt className="info__term">Database</dt>
          <dd className="info__description">Firebase</dd>
        </div>
      </dl>

      <h3 className="content__title">Educate</h3>

      <dl className="info">
        <div className="info__item">
          <dt className="info__term">2020.09 - 2021.04 </dt>
          <dd className="info__description">굿잡아카데미 웹과정 수료</dd>
        </div>
        <div className="info__item">
          <dt className="info__term">2017.03 - 2020.02</dt>
          <dd className="info__description">
            한국영상대학교 영상편집제작과 졸업
          </dd>
        </div>
      </dl>

      <h3 className="content__title">Work</h3>

      <dl className="info">
        <div className="info__item">
          <dt className="info__term">2023.07 - 2023.09</dt>
          <dd className="info__description">엔에이치에스 프론트엔드 개발</dd>
        </div>
        <div className="info__item">
          <dt className="info__term">2019.07 - 2020.07</dt>
          <dd className="info__description">문화방송 보도NPS부</dd>
        </div>
        <div className="info__item">
          <dt className="info__term">2018.07 - 2018.08</dt>
          <dd className="info__description">대통령기록관 보존복원과</dd>
        </div>
      </dl>
    </div>
  );
}
