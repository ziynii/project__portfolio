import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';

export default function Header() {
  const navigate = useNavigate();

  const handlePrevPath = () => {
    navigate(-1);
  };

  const handleForwardPath = () => {
    navigate(1);
  };

  const handleRefreshPath = () => {
    navigate(0);
  };

  const menu = [
    {
      icon: '👩🏻',
      text: 'profile',
    },
    {
      icon: '📁',
      text: 'project',
    },
    {
      icon: '📨',
      text: 'contact',
    },
  ];
  const location = useLocation();
  const currentPath = location.pathname.substring(1);

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__left-box">
          <div className="header__left-box__circle red"></div>
          <div className="header__left-box__circle yellow"></div>
          <div className="header__left-box__circle green"></div>
        </div>
        <ul className="header__nav">
          {menu.map((item, i) => (
            <li
              key={i}
              className={
                'header__nav__item ' +
                (currentPath === item.text ? 'active' : '')
              }
            >
              <a href={`/${item.text}`}>
                <span>{item.icon}</span>
                <span className="sm-hidden">{item.text}</span>
              </a>
              <IoIosClose className="btn--close" />
            </li>
          ))}
        </ul>
      </div>
      <div className="header__path-box">
        <div className="btns sm-hidden">
          {' '}
          <button className="btn--arrow-left" onClick={handlePrevPath}></button>
          <button
            className="btn--arrow-right"
            onClick={handleForwardPath}
          ></button>
          <button className="btn--refresh" onClick={handleRefreshPath}></button>
        </div>

        <div className="header__search-bar">
          <div className="btn--lock"></div>
          <div className="header__search-bar__path">
            http://www.ziyeon-portfolio/{currentPath}
          </div>
        </div>

        <button className="btn--more sm-hidden"></button>
      </div>
    </header>
  );
}
