import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function HomeOutlet() {
  return (
    <div className="container">
      <div className="container__wrapper">
        <Header />
        <div className="container__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
