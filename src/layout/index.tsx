import { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Layout.module.css';
import CallButton from '../components/UI/CallButton ';

function Layout() {
  const location = useLocation();

  const isImpressumPage = location.pathname === '/impressum';

  return (
    <Fragment>
      {!isImpressumPage && <Header />}
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
      <CallButton phoneNumber='+491729017929' />
      <Footer />

    </Fragment>
  );
}

export default Layout;



