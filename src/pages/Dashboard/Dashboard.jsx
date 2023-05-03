import style from './Dashboard.module.scss';
import {Header, Sidebar, Main } from '../../layouts';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Main />
      </main>
    </>
  );
}