import style from './Dashboard.module.scss';
import {Header, Sidebar, Main } from '../../layouts';
import { useFetch } from '../../hooks';

export const Dashboard = () => {

  const { data, loading, error } = useFetch();

  return (
    <>
      <Header />
      <main>
        <Sidebar />
        {error ? (
          <div>
            <p>Une erreur est survenue : {error.message}</p>
          </div>
        ) : loading ? (
          <div>
            <p>Chargement en cours...</p>
          </div>
        ) : (
          <Main />
        )}
      </main>
    </>
  );
}