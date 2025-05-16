import { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Layout.module.css';
import CallButton from '../components/UI/CallButton';

function Layout() {
  const location = useLocation();

  const isImpressumPage = location.pathname === '/impressum';

  return (
    <Fragment>
      {!isImpressumPage && <Header data-testid="header" />}
      <main className={styles.mainContainer} data-testid="main-container">
        <Outlet />
      </main>
      <CallButton phoneNumber='+4917669653451' data-testid="call-button" />
      <Footer data-testid="footer" />
    </Fragment>
  );
}

export default Layout;



