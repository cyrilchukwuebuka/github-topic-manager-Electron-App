import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const Layout: FC<{}> = () => {
    return (
      <div className='h-screen bg-slate-100 overflow-hidden'>
        <Header />
        <main className='app__container'>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    );
  }

export default Layout