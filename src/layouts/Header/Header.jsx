import { ReactComponent as Logo } from '../../assets/sportseelogo.svg';
import style from './Header.module.scss';
import { DataSource } from '../../components';
import { useFetch } from '../../hooks';

export const Header = () => {

  const { dataSource } = useFetch();

  return (
    <header>
      <DataSource source={dataSource} />
      <div className={style.container}>
        <div className={style.logoContainer}>
          <Logo width={135} className={style.logo} />
        </div>
        <nav className={style.nav}>
          <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
