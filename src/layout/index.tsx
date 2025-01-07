import { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Layout.module.css';

function Layout() {
  const location = useLocation(); // Получаем текущий маршрут

  // Проверяем, находимся ли на странице /impressum
  const isImpressumPage = location.pathname === '/impressum';

  return (
    <Fragment>
      {/* Убираем Header, если на странице Impressum */}
      {!isImpressumPage && <Header />} 
      
      <main className={styles.mainContainer}>
        <Outlet /> {/* Рендерит дочерние компоненты */}
      </main>
      
      <Footer />
    </Fragment>
  );
}

export default Layout;



