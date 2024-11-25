import React, { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineRemove } from 'react-icons/md';
import logo from '../../images/logo.png';

export default function ProfileHeader() {
  return (
    <div className="profile__top">
      <h1 className="logo">
        <img src={logo} alt="포트폴리오 로고 Jiyeon" />
      </h1>
      <div className="search">
        <div className="typing-container">
          <span>홍지연</span>
          <span className="cursor"></span>
        </div>

        <div className="btns">
          <button className="btn--close">
            <CgClose />
          </button>
          <MdOutlineRemove className="line" />
          <button className="btn--search">
            <IoSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
